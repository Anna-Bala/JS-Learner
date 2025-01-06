import './index.scss';

import useWithSound from '../../hooks/useWithSound';
import buttonClickSound from '/button-click.mp3';

type TProps = {
  className?: string;
  color: 'neutral' | 'green' | 'primary' | 'orange' | 'red';
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const PanelButton = ({ className = '', color, onClick }: TProps) => {
  const { playSound } = useWithSound(buttonClickSound);
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick(event);
    playSound();
  };

  return (
    <button className={`button panel-button panel-button-color__${color} ${className}`} onClick={handleButtonClick}>
      <div className="panel-button__decoration"></div>
    </button>
  );
};

export default PanelButton;
