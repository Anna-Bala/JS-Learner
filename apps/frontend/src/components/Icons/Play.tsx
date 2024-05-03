import type { TIconProps } from './types';

const Play = ({ fill, size }: TIconProps) => (
  <svg width={size} height={size} viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M37.171 18.7212C40.943 21.0793 40.943 26.9206 37.171 29.2788L8.57468 47.1582C4.77358 49.5351 0 46.5959 0 41.8794V6.1205C0 1.40382 4.77358 -1.53489 8.57468 0.841706L37.171 18.7212Z"
      fill={fill}
    />
  </svg>
);

export default Play;
