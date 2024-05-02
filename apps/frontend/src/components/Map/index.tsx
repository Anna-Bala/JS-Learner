import { ReactNode } from 'react';

import './index.scss';

type TProps = {
  children: ReactNode;
};

const Map = ({ children }: TProps) => {
  return <div className="map">{children}</div>;
};

export default Map;
