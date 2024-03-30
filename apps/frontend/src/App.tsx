import { CodeBlocksSection, HTMLSection, ResultSection, ScriptSection, TaskSection } from './components/MapSections';
import Character from './components/Character';
import Map from './components/Map';
import levels from './levels.json';

const level = levels[0];

const App = () => (
  <Map>
    <Character />
    <TaskSection description={level.description} />
    <HTMLSection htmlSourceCode={level.htmlSourceCode} />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'row', gap: '16px' }}>
      <CodeBlocksSection />
      <ScriptSection />
      <ResultSection resultIFrameSrcDoc={level.resultIFrameSrcDoc} />
    </div>
  </Map>
);

export default App;
