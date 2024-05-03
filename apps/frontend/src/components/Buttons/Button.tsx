import './index.scss';

import Typography from '../Typography';

type TProps = {
  children: string;
  className?: string;
  color: 'neutral' | 'green' | 'primary' | 'orange' | 'red';
  variant?: 'small' | 'medium' | 'large';
};

const Button = ({ children, className, color, variant = 'medium' }: TProps) => (
  <button className={`button button-color__${color} button__${variant} ${className}`}>
    <Typography color="neutral-white" variant="body2">
      {children}
    </Typography>
  </button>
);

export default Button;
