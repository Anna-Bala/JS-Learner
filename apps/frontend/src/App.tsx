import { CodeBlocksSection, HTMLSection, ResultSection, ScriptSection, TaskSection } from './components/MapSections';
import Character from './components/Character';
import ChatAI from './components/ChatAI';
import Map from './components/Map';
import levels from './levels';

const level = levels[0];

const App = () => (
  <Map>
    <Character />
    <TaskSection challanges={level.challanges} description={level.description} />
    <HTMLSection htmlSourceCode={level.htmlSourceCode} />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'row', gap: '16px' }}>
      <CodeBlocksSection codeBlocks={level.codeBlocks} />
      <ScriptSection evaluateChallange={level.evaluateChallange} scriptSlots={level.scriptSlots} />
      <ResultSection resultIFrameSrcDoc={level.resultIFrameSrcDoc} />
    </div>
    <ChatAI challangeQuestions={level.challangeQuestions} />
  </Map>
);

export default App;
