import { useEffect } from 'react';

import CodeBlock from '../../CodeBlock';
import { evaluateChallange } from './utils';
import './index.scss';

type TProps = {
  codeBlocksInCorrectOrder: string[];
  scriptSlots: string[][];
};

const ScriptSection = ({ codeBlocksInCorrectOrder, scriptSlots }: TProps) => {
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
              const isStaticBlock = slotContent !== '';

              return (
                <CodeBlock
                  className={isStaticBlock ? 'script-block -static' : 'script-block'}
                  info={{ content: slotContent, id: index }}
                  key={`${rowIndex}-${index}-${slotContent}`}
                  variant={isStaticBlock ? 'static' : 'slot'}
                />
                // <div className={slotContent !== '' ? 'script-block -static' : 'script-block'}>{slotContent}</div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScriptSection;
