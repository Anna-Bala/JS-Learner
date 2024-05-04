import {
  CodeBlocksSection,
  HTMLSection,
  MenuSection,
  ResultSection,
  ScriptSection,
  TaskSection,
} from './components/MapSections';
import Character from './components/Character';
import ChatAI from './components/ChatAI';
import DebuggingTools from './components/DebuggingTools';
import levels from './levels';
import Map from './components/Map';

import StarEmpty from './components/Icons/StarEmpty';
import StarFilled from './components/Icons/StarFilled';
import Home from './components/Icons/Home';
import Locker from './components/Icons/Locker';
import Replay from './components/Icons/Replay';
import Info from './components/Icons/Info';
import Play from './components/Icons/Play';

import Typography from './components/Typography';
import Button from './components/Buttons/Button';
import PanelButton from './components/Buttons/PanelButton';

import CodeBlock from './components/CodeBlock';

import ModalWrapper from './components/Modals/ModalWrapper';

const level = levels[0];

const App = () => (
  <Map>
    <Character />
    <div style={{ display: 'flex', flexDirection: 'row', gap: '24px' }}>
      <TaskSection challanges={level.challanges} description={level.description} />
      <MenuSection level={level} />
    </div>
    {/* <HTMLSection htmlSourceCode={level.htmlSourceCode} /> */}
    <div style={{ flex: 1, display: 'flex', flexDirection: 'row', gap: '16px' }}>
      <CodeBlocksSection codeBlocks={level.codeBlocks} />
      <ScriptSection evaluateChallange={level.evaluateChallange} scriptSlots={level.scriptSlots} />
      <ResultSection resultIFrameSrcDoc={level.resultIFrameSrcDoc} />
    </div>
    <DebuggingTools level={level} />
    <ChatAI challangeQuestions={level.challangeQuestions} />
    {/* <ModalWrapper
      title="Test"
      color="primary"
      onPrimaryAction={() => {}}
      handleClose={() => {}}
      primaryActionText="Close"
    >
      XDDD
    </ModalWrapper>

    <div style={{ display: 'flex', marginTop: '16px' }}>
      <StarEmpty size={48} />
      <StarEmpty size={24} />
      <StarFilled size={48} />
      <StarFilled size={24} />
      <Home fill="red" size={48} />
      <Home fill="blue" size={24} />
      <Locker fill="red" size={48} />
      <Locker fill="blue" size={24} />
      <Replay fill="red" size={48} />
      <Replay fill="blue" size={24} />
      <Info fill="red" size={48} />
      <Info fill="blue" size={24} />
      <Play fill="red" size={48} />
      <Play fill="blue" size={24} />
    </div>

    <Typography color="neutral-900" variant="heading1">
      Heading 1
    </Typography>

    <Typography color="neutral-900" variant="heading2">
      Heading 2
    </Typography>

    <Typography color="neutral-900" variant="heading3">
      Heading 3
    </Typography>

    <Typography color="neutral-900" variant="body2">
      Test
    </Typography>

    <Typography color="neutral-900" variant="subtitle2">
      Test
    </Typography>

    <div>
      <Button color="green" variant="small">
        Button click on me
      </Button>
      <Button color="green">Button click on me</Button>
      <Button color="green" variant="large">
        Button click on me
      </Button>
    </div>
    <PanelButton color="orange" />

    <div>
      <CodeBlock text="code" />
      <CodeBlock text="code" variant="error" />
      <CodeBlock variant="slot" />
      <CodeBlock text="code" variant="static" />
    </div> */}
  </Map>
);

export default App;
