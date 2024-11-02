import { useState } from 'react';

import { convertLevelScore, handleRunJSCode } from '../../utils';
import { HomeIcon, InfoIcon, PlayIcon, StarEmptyIcon, StarFilledIcon } from '../../Icons';
import { IconButton } from '../../Buttons';
import Link from '../../Routing/Link';
import RunCodeModal from '../../Modals/RunCodeModal';
import Typography from '../../Typography';

import type { TLevel } from '../../../levels';

import colors from '../../../styling/_colors.module.scss';
import './index.scss';

type TProps = {
  currentScore: number;
  handleInfoIconButtonClick: () => void;
  handleScoreChange: (action: 'jsRun' | 'useAI' | 'pass10Minutes') => void;
  level: TLevel;
  setIsCorrectlySolved: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  timeLeft: number;
};

const iconsColor = colors['color-primary-400'];

const MenuSection = ({
  currentScore,
  handleInfoIconButtonClick,
  handleScoreChange,
  level,
  setIsCorrectlySolved,
  timeLeft,
}: TProps) => {
  const [isRunCodeModalOpen, setIsRunCodeModalOpen] = useState(false);

  const toggleIsRunCodeModalOpen = () => setIsRunCodeModalOpen(prevState => !prevState);

  const runJsCode = () =>
    handleRunJSCode(level.codeBlocksInCorrectOrder, handleScoreChange, setIsCorrectlySolved, toggleIsRunCodeModalOpen);

  const formatTimeLeft = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <>
      <div className="menu-section">
        <div className="menu-section__level-info">
          <Typography color="primary-700" variant="subtitle2">
            {level.name}
          </Typography>
          <div className="menu-section__stars">
            {convertLevelScore(currentScore).map((scoreValue, index) =>
              scoreValue ? <StarFilledIcon key={index} size={48} /> : <StarEmptyIcon key={index} size={48} />,
            )}
          </div>
        </div>
        <div className="menu-section__actions">
          <Link href="/">
            <IconButton icon={<HomeIcon fill={iconsColor} size={48} />} onClick={() => {}} />
          </Link>
          <IconButton icon={<InfoIcon fill={iconsColor} size={48} />} onClick={handleInfoIconButtonClick} />
          <IconButton icon={<PlayIcon fill={iconsColor} size={48} />} onClick={toggleIsRunCodeModalOpen} />
          <Typography className="menu-section__timer" color="primary-700" variant="body1">
            Time left: {formatTimeLeft(timeLeft)}
          </Typography>
        </div>
      </div>
      <RunCodeModal handleClose={toggleIsRunCodeModalOpen} isOpen={isRunCodeModalOpen} onPrimaryAction={runJsCode} />
    </>
  );
};

export default MenuSection;
