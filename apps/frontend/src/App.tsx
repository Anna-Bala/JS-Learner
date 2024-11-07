import { useEffect, useState } from 'react';
import mixpanel from 'mixpanel-browser';

import { checkAuthentication } from './api/utils';
import levels from './levels';
import LevelsList from './containers/LevelsList';
import Map from './components/Map';
import RegisterAndLogin from './containers/RegisterAndLogin';
import Route from './components/Routing/Route';

const App = () => {
  const [level, setLevel] = useState(levels.fundamentals[0]);

  useEffect(() => {
    mixpanel.init(process.env.MIXPANEL_TOKEN || '', {
      debug: true,
      track_pageview: true,
      persistence: 'localStorage',
    });

    checkAuthentication();
  }, []);

  return (
    <>
      <Route path="/">
        <LevelsList setLevel={setLevel} />
      </Route>
      <Route path="/level">
        <Map level={level} />
      </Route>
      <Route path="/login">
        <RegisterAndLogin isLogin />
      </Route>
      <Route path="/register">
        <RegisterAndLogin />
      </Route>
    </>
  );
};

export default App;
