import { useEffect, useRef } from 'react';

const useWithSound = (audioSource: string) => {
  const soundRef = useRef<HTMLAudioElement>();

  useEffect(() => {
    soundRef.current = new Audio(audioSource);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const playSound = () => {
    soundRef.current?.play();
  };

  return {
    playSound,
  };
};

export default useWithSound;
