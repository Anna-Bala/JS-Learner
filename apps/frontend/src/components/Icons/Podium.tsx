import type { TIconProps } from './types';

const Podium = ({ fill, size }: TIconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 17.1429C17.0532 17.1429 16.2857 17.9103 16.2857 18.8571V29.1429H2.5714C1.62463 29.1429 0.857117 29.9103 0.857117 30.8571V46.2857C0.857117 47.2325 1.62463 48 2.5714 48H45.4285C46.3753 48 47.1428 47.2325 47.1428 46.2857V34.2857C47.1428 33.3389 46.3753 32.5714 45.4285 32.5714H31.7143V18.8571C31.7143 17.9103 30.9468 17.1429 30 17.1429H18Z"
      fill={fill}
    />
  </svg>
);

export default Podium;
