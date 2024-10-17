import { useEffect, useState } from 'react';

import { handleRunJSCode } from '../../utils';
import RunCodeModal from '../../Modals/RunCodeModal';
import DraggableCodeBlock from '../../DraggableCodeBlock';
import DroppableCodeBlock from '../../DroppableCodeBlock';
import './index.scss';

import type { TAllDroppedCodeBlocksInScriptSlots } from '../../Map';

type TProps = {
  allDroppedCodeBlocksInScriptSlots: TAllDroppedCodeBlocksInScriptSlots;
  codeBlocksInCorrectOrder: string[];
  scriptSlots: string[][];
};

const ScriptSection = ({ allDroppedCodeBlocksInScriptSlots, codeBlocksInCorrectOrder, scriptSlots }: TProps) => {
  const [isRunCodeModalOpen, setIsRunCodeModalOpen] = useState(false);

  const toggleIsRunCodeModalOpen = () => setIsRunCodeModalOpen(prevState => !prevState);

  const runJsCode = () => handleRunJSCode(codeBlocksInCorrectOrder);

  const appendKeydownActions = (event: KeyboardEvent) => {
    if (event.code === 'KeyJ') toggleIsRunCodeModalOpen();
  };

  useEffect(() => {
    document.addEventListener('keydown', appendKeydownActions);

    return () => {
      document.removeEventListener('keydown', appendKeydownActions);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="script-section">
        <div className="slots-wrapper">
          {scriptSlots.map((codeLine, rowIndex) => (
            <div className="row-wrapper" key={rowIndex}>
              {codeLine.map((slotContent, index) => {
                const scriptBlockId = `${rowIndex}-${index}-${slotContent}`;
                const isStaticBlock = slotContent !== '';
                const droppedCodeBlock = allDroppedCodeBlocksInScriptSlots?.[scriptBlockId];

                return droppedCodeBlock ? (
                  <DraggableCodeBlock className="script-block" info={droppedCodeBlock} key={scriptBlockId} />
                ) : (
                  <DroppableCodeBlock
                    className={isStaticBlock ? 'script-block -static' : 'script-block'}
                    disabled={isStaticBlock}
                    id={scriptBlockId}
                    info={{ content: slotContent, id: index }}
                    key={scriptBlockId}
                    variant={isStaticBlock ? 'static' : 'slot'}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <RunCodeModal handleClose={toggleIsRunCodeModalOpen} isOpen={isRunCodeModalOpen} onPrimaryAction={runJsCode} />
    </>
  );
};

export default ScriptSection;
