import type { TIconProps } from './types';

const Close = ({ fill, size }: TIconProps) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2L10 10M2 10L10 2" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Close;
