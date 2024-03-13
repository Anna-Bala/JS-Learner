import { useEffect } from 'react';

import './character_script';
import './index.css';
import { step } from './character_script';

const Character = () => {
  useEffect(() => {
    step();
  }, []);

  return <div className="character"></div>;
};

export default Character;
