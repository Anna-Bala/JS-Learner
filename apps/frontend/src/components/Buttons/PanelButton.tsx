import './index.scss';

type TProps = {
  className?: string;
  color: 'neutral' | 'green' | 'primary' | 'orange' | 'red';
};

const PanelButton = ({ className, color }: TProps) => (
  <button className={`button panel-button panel-button-color__${color} ${className}`}>
    <div className="panel-button__decoration"></div>
  </button>
);

export default PanelButton;
