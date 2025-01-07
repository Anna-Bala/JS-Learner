import { useEffect, useRef } from 'react';

import { useSoundMuted } from '../context/SoundMutedContext';

const useWithSound = (audioSource: string) => {
  const soundRef = useRef<HTMLAudioElement>();
  const { isMuted } = useSoundMuted();

  useEffect(() => {
    soundRef.current = new Audio(audioSource);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const playSound = () => {
    if (soundRef.current && !isMuted) {
      soundRef.current.play();
    }
  };

  return {
    playSound,
  };
};

export default useWithSound;
