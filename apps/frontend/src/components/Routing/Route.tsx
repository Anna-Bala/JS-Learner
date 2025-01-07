import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
  path: string;
};

const Route = ({ path, children }: TProps) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
