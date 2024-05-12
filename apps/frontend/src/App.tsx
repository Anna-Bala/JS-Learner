import levels from './levels';
import Map from './components/Map';

const level = levels[0];

const App = () => <Map level={level} />;

export default App;
