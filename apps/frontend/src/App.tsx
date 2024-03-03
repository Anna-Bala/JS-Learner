import { CodeBlocksSection, HTMLSection, ResultSection, ScriptSection, TaskSection } from './components/MapSections';
import Character from './components/Character';
import Map from './components/Map';

const App = () => (
  <Map>
    <Character />
    <TaskSection />
    <HTMLSection />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'row', gap: '16px' }}>
      <CodeBlocksSection />
      <ScriptSection />
      <ResultSection />
    </div>
  </Map>
);

export default App;
