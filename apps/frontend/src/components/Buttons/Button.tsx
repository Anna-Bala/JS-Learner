import './index.scss';

import Typography from '../Typography';

type TProps = {
  children: string;
  className?: string;
  color: 'neutral' | 'green' | 'primary' | 'orange' | 'red';
  disabled?: boolean;
  onClick: () => void;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant?: 'small' | 'medium' | 'large';
};

const Button = ({
  children,
  className = '',
  color,
  disabled = false,
  onClick,
  type = 'button',
  variant = 'medium',
}: TProps) => (
  <button
    className={`button button-color__${color} button__${variant} ${className}`}
    disabled={disabled}
    onClick={onClick}
    type={type}
  >
    <Typography color="neutral-white" variant="body2">
      {children}
    </Typography>
  </button>
);

export default Button;
