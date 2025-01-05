import { ReactNode } from 'react';

import './index.scss';

type TProps = {
  className?: string;
  disabled?: boolean;
  icon: ReactNode;
  onClick: () => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
  onMouseLeave: () => void;
};

const IconButton = ({ className = '', disabled, icon, onClick, onMouseDown, onMouseLeave, onMouseUp }: TProps) => (
  <button
    className={`icon-button ${className}`}
    disabled={disabled}
    onClick={onClick}
    onMouseDown={onMouseDown}
    onMouseLeave={onMouseLeave}
    onMouseUp={onMouseUp}
    type="button"
  >
    {icon}
  </button>
);

export default IconButton;
