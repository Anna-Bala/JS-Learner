import { useState } from 'react';

import { convertLevelScore } from '../../utils';
import { StarEmptyIcon, StarFilledIcon } from '../../Icons';
import { updateLevelScore } from '../../../api/utils';
import ModalWrapper from '../ModalWrapper';
import Typography from '../../Typography';
import './index.scss';

type TProps = {
  handleClose: () => void;
  isCorrectlySolved?: boolean;
  isOpen: boolean;
  levelNameDb: string;
  score: number;
};

const LevelSummaryModal = ({ handleClose, isCorrectlySolved, isOpen, levelNameDb, score }: TProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [savingErrored, setSavingErrored] = useState(false);

  const onAnyAction = async () => {
    if (isCorrectlySolved) {
      setIsLoading(true);
      setSavingErrored(false);
      await updateLevelScore({ levelNameDb, score })
        .then(() => {
          setIsLoading(false);
          handleClose();
          window.history.pushState({}, '', '/');
          const navEvent = new PopStateEvent('popstate');
          window.dispatchEvent(navEvent);
        })
        .catch(() => setSavingErrored(true));
    } else {
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
