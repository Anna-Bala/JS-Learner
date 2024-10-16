import { ReactNode } from 'react';

import './index.scss';

type TProps = {
  className?: string;
  icon: ReactNode;
  onClick: () => void;
};

const IconButton = ({ className = '', icon, onClick }: TProps) => (
  <button className={`icon-button ${className}`} onClick={onClick} type="button">
    {icon}
  </button>
);

export default IconButton;
