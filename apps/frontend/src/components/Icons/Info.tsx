import type { TIconProps } from './types';

const Info = ({ fill, size }: TIconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24 0C10.7664 0 0 10.7664 0 24C0 37.2336 10.7664 48 24 48C37.2336 48 48 37.2336 48 24C48 10.7664 37.2336 0 24 0ZM26.4 35.4C26.4 36.3936 24.9936 37.2 24 37.2C23.0064 37.2 21.6 36.3936 21.6 35.4C21.6 35.4 21.6 23.1936 21.6 22.2C21.6 21.2064 23.0064 20.4 24 20.4C24.9936 20.4 26.4 21.2064 26.4 22.2C26.4 22.2 26.4 34.4064 26.4 35.4ZM24 16.8C22.674 16.8 21.6 15.726 21.6 14.4C21.6 13.074 22.674 12 24 12C25.326 12 26.4 13.074 26.4 14.4C26.4 15.726 25.326 16.8 24 16.8Z"
      fill={fill}
    />
  </svg>
);

export default Info;
