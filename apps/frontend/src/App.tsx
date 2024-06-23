import { useState } from 'react';

import levels from './levels';
import LevelsList from './containers/LevelsList';
import Map from './components/Map';
import Route from './components/Routing/Route';

const App = () => {
  const [level, setLevel] = useState(levels.fundamentals[0]);

  return (
    <>
      <Route path="/">
        <LevelsList setLevel={setLevel} />
      </Route>
      <Route path="/level">
        <Map level={level} />
      </Route>
    </>
  );
};

export default App;
