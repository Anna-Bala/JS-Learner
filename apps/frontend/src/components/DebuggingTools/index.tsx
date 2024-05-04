import { useState } from 'react';

import './index.scss';

import type { TLevel } from '../../levels';

type TProps = {
  level: TLevel;
};

const DebuggingTools = ({ level }: TProps) => {
  const [isDebuggingToolsPanelOpen, setIsDebuggingToolsPanelOpen] = useState(false);

  const toggleIsDebuggingToolsPanelOpen = () => setIsDebuggingToolsPanelOpen(prevState => !prevState);

  if (!window.location.href.includes('localhost')) return null;

  const debbugingOptions = [
    {
      name: 'Solve challange',
      debbugingFunction: async () => {
        const allCodeBlocks = Array.from(document.querySelectorAll('.code-block')).filter(
          codeBlock => !codeBlock.classList.contains('script-block'),
        ) as HTMLElement[];

        allCodeBlocks.forEach(codeBlock => (codeBlock.style.display = 'none'));

        const emptyScriptSlots = Array.from(document.querySelectorAll('.script-block')).filter(
          scriptSlot => !scriptSlot.classList.contains('-static'),
        );

        await emptyScriptSlots.forEach(
          (scriptSlot, index) => (scriptSlot.innerHTML = level.codeBlocksInCorrectOrder[index]),
        );
      },
    },
  ];

  return (
    <div className="debugging-tools">
      <button onClick={toggleIsDebuggingToolsPanelOpen}>
        {isDebuggingToolsPanelOpen ? 'Close' : 'Open'} Debugging Tools
      </button>

      {isDebuggingToolsPanelOpen && (
        <div className="debugging-tools__functions">
          {debbugingOptions.map(({ debbugingFunction, name }) => (
            <button onClick={debbugingFunction}>{name}</button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DebuggingTools;
