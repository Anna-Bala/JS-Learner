import { useEffect } from 'react';

import { evaluateChallange } from './utils';
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
  const handleJsCodeButtonClick = () => {
    const allCodeBlocks = document.getElementsByClassName('script-block');
    const jsCode = Array.from(allCodeBlocks)
      .map(codeBlock => codeBlock.innerHTML)
      .join('');

    const jsCodeFormatted = jsCode
      .replaceAll('document', "document.getElementById('resultIframe').contentWindow.document")
      .replaceAll('&lt;', '<');

    try {
      eval(jsCodeFormatted);
    } catch {
      window.alert('WRONG FORMAT!');
    } finally {
      const result = evaluateChallange(codeBlocksInCorrectOrder);
      if (result) window.alert('CORRECT!');
      else window.alert('INCORRECT :(');
    }
  };

  const appendKeydownActions = (event: KeyboardEvent) => {
    if (event.code === 'KeyJ') handleJsCodeButtonClick();
  };

  useEffect(() => {
    document.addEventListener('keydown', appendKeydownActions);

    return () => {
      document.removeEventListener('keydown', appendKeydownActions);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
  );
};

export default ScriptSection;
