import './index.scss';

type TProps = {
  className?: string;
  color: 'neutral' | 'green' | 'primary' | 'orange' | 'red';
  onClick: () => void;
};

const PanelButton = ({ className = '', color, onClick }: TProps) => (
  <button className={`button panel-button panel-button-color__${color} ${className}`} onClick={onClick}>
    <div className="panel-button__decoration"></div>
  </button>
);

export default PanelButton;
