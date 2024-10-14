import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';

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
        <DndContext>
          <Map level={level} />
        </DndContext>
      </Route>
    </>
  );
};

export default App;
