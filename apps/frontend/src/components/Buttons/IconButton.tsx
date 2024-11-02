import { ReactNode } from 'react';

import './index.scss';

type TProps = {
  className?: string;
  disabled?: boolean;
  icon: ReactNode;
  onClick: () => void;
};

const IconButton = ({ className = '', disabled, icon, onClick }: TProps) => (
  <button className={`icon-button ${className}`} disabled={disabled} onClick={onClick} type="button">
    {icon}
  </button>
);

export default IconButton;
