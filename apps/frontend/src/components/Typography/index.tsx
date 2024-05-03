import { ReactNode } from 'react';

import './index.scss';

const variantsMapping = {
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  subtitle1: 'h5',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
};

type TProps = {
  children: ReactNode;
  className?: string;
  color:
    | 'neutral-black'
    | 'neutral-white'
    | 'neutral-900'
    | 'neutral-800'
    | 'neutral-700'
    | 'neutral-600'
    | 'neutral-500'
    | 'neutral-400'
    | 'neutral-300'
    | 'neutral-200'
    | 'neutral-100'
    | 'green-900'
    | 'green-800'
    | 'green-700'
    | 'green-600'
    | 'green-500'
    | 'green-400'
    | 'green-300'
    | 'green-200'
    | 'green-100'
    | 'primary-900'
    | 'primary-800'
    | 'primary-700'
    | 'primary-600'
    | 'primary-500'
    | 'primary-400'
    | 'primary-300'
    | 'primary-200'
    | 'primary-100'
    | 'orange-900'
    | 'orange-800'
    | 'orange-700'
    | 'orange-600'
    | 'orange-500'
    | 'orange-400'
    | 'orange-300'
    | 'orange-200'
    | 'orange-100'
    | 'red-900'
    | 'red-800'
    | 'red-700'
    | 'red-600'
    | 'red-500'
    | 'red-400'
    | 'red-300'
    | 'red-200'
    | 'red-100';
  variant: 'heading1' | 'heading2' | 'heading3' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2';
};

const Typography = ({ children, className, color, variant, ...props }: TProps) => {
  const Component = variant ? variantsMapping[variant] : 'p';

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    <Component className={`typography-color__${color} typography__${variant} ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
