/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';

interface SoundMutedContextType {
  isMuted: boolean;
  toggleSoundMute: () => void;
}

const SoundMutedContext = createContext<SoundMutedContextType | undefined>(undefined);

const SoundMutedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleSoundMute = () => setIsMuted(prev => !prev);

  return <SoundMutedContext.Provider value={{ isMuted, toggleSoundMute }}>{children}</SoundMutedContext.Provider>;
};

export const useSoundMuted = (): SoundMutedContextType => {
  const context = useContext(SoundMutedContext);
  if (!context) {
    throw new Error('useSoundContext must be used within a SoundProvider');
  }
  return context;
};

export default SoundMutedProvider;
