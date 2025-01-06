import { ReactNode } from 'react';

import './index.scss';

import useWithSound from '../../hooks/useWithSound';
import buttonClickSound from '/button-click.mp3';

type TProps = {
  className?: string;
  disabled?: boolean;
  icon: ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
  onMouseLeave?: () => void;
};

const IconButton = ({ className = '', disabled, icon, onClick, onMouseDown, onMouseLeave, onMouseUp }: TProps) => {
  const { playSound } = useWithSound(buttonClickSound);
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick(event);
    playSound();
  };

  return (
    <button
      className={`icon-button ${className}`}
      disabled={disabled}
      onClick={handleButtonClick}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      type="button"
    >
      {icon}
    </button>
  );
};

export default IconButton;
