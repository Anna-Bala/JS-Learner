import type { TIconProps } from './types';

const Replay = ({ fill, size }: TIconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_34664_303)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35.8371 24.4218C35.8371 24.4218 32.0867 24.0008 31.4022 27.1771C30.7646 33.2705 25.9158 38.0084 20.029 38.0084C13.708 38.0084 8.58333 32.5457 8.58333 25.8076C8.58333 20.1875 13.1466 16.5212 18.3305 15.4599C19.2112 15.2793 20.029 16.0003 20.029 16.9558V19.8329C20.029 21.0644 21.3307 21.7866 22.2768 21.0799L33.7261 12.5377C34.1084 12.2514 34.3358 11.7871 34.3358 11.2893C34.3358 10.8276 34.1387 10.3892 33.7999 10.1003L22.3506 0.336803C21.4142 -0.461455 20.029 0.249111 20.029 1.52581V4.64792C20.029 5.42168 19.4858 6.0755 18.7636 6.16061C8.766 7.34188 0 14.9815 0 25.8076C0 37.5997 8.96683 47.1594 20.029 47.1594C30.5734 47.1594 39.2148 38.4727 40 27.4467C40 25.685 38.3373 24.4218 35.8371 24.4218Z"
        fill={fill}
      />
    </g>
  </svg>
);

export default Replay;