import { ReactNode } from 'react';

import './index.css';

type TProps = {
  children: ReactNode;
};

const Map = ({ children }: TProps) => {
  return <div className="map">{children}</div>;
};

export default Map;
