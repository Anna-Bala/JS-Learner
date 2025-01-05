import { useEffect, useState } from 'react';
import mixpanel from 'mixpanel-browser';

import { convertLevelScore } from '../../utils';
import { StarEmptyIcon, StarFilledIcon } from '../../Icons';
import { updateLevelScore } from '../../../api/utils';
import ModalWrapper from '../ModalWrapper';
import Typography from '../../Typography';
import useWithSound from '../../../hooks/useWithSound';
import correctSound from '../../../../public/correct.mp3';
import wrongSound from '../../../../public/wrong.mp3';
import './index.scss';

import type { TTimer } from '../../Map';

type TProps = {
  handleClose: () => void;
  isCorrectlySolved?: boolean;
  isOpen: boolean;
  levelNameDb: string;
  score: number;
  timer: TTimer;
};

const LevelSummaryModal = ({ handleClose, isCorrectlySolved, isOpen, levelNameDb, score, timer }: TProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [savingErrored, setSavingErrored] = useState(false);

  const { playSound: playCorrectSound } = useWithSound(correctSound);
  const { playSound: playWrongSound } = useWithSound(wrongSound);

  useEffect(() => {
    if (isOpen) {
      if (isCorrectlySolved) {
        playCorrectSound();
      } else {
        playWrongSound();
      }
    }
  }, [isOpen, isCorrectlySolved]);

  const onAnyAction = async () => {
    if (isCorrectlySolved) {
      setIsLoading(true);
      setSavingErrored(false);
      await updateLevelScore({ levelNameDb, score })
        .then(() => {
          mixpanel.track('End level', {
            levelName: levelNameDb,
            success: true,
            timeLeft: timer.timeLeft,
            score,
          });

          handleClose();
          window.history.pushState({}, '', '/');
          const navEvent = new PopStateEvent('popstate');
          window.dispatchEvent(navEvent);
        })
        .catch(() => setSavingErrored(true))
        .finally(() => setIsLoading(false));
    } else {
      timer.resumeTimer();
      handleClose();
    }
  };

  return (
    <ModalWrapper
      color={isCorrectlySolved ? 'green' : 'red'}
      handleClose={onAnyAction}
      isLoading={isLoading}
      isOpen={isOpen}
      onPrimaryAction={onAnyAction}
      primaryActionText={savingErrored ? 'Retry level save' : isCorrectlySolved ? 'Close level' : 'Try again'}
      title="Level summary"
    >
      <Typography color={isCorrectlySolved ? 'green-800' : 'red-800'} variant="body1">
        {isCorrectlySolved ? 'Congratulations, your solution is correct!' : 'Unfortunately your solution is incorrect.'}
      </Typography>
      {isCorrectlySolved ? (
        <div className="score-info">
          <Typography color={isCorrectlySolved ? 'green-800' : 'red-800'} variant="body2">
            Your new score:
          </Typography>
          <div className="score-info__stars">
            {convertLevelScore(score).map((scoreValue, index) =>
              scoreValue ? <StarFilledIcon key={index} size={48} /> : <StarEmptyIcon key={index} size={48} />,
            )}
          </div>
        </div>
      ) : null}
      {savingErrored ? (
        <div className="network-error">
          <Typography color="red-800" variant="body1">
            An error occured while saving your progess, please try again.
          </Typography>
        </div>
      ) : null}
    </ModalWrapper>
  );
};

export default LevelSummaryModal;
