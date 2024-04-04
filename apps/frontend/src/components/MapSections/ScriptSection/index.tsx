import { useEffect } from 'react';

import './index.css';

type TProps = {
  scriptSlots: string[][];
};

const ScriptSection = ({ scriptSlots }: TProps) => {
  useEffect(() => {
    const runJSCodeButton = document.getElementById('runJSCodeButton') as HTMLButtonElement;

    runJSCodeButton?.addEventListener('click', () => {
      const allCodeBlocks = document.getElementsByClassName('script-block');
      const jsCode = Array.from(allCodeBlocks)
        .map(codeBlock => codeBlock.innerHTML)
        .join('');

      const jsCodeFormatted = jsCode.replaceAll(
        'document',
        "document.getElementById('resultIframe').contentWindow.document",
      );

      eval(jsCodeFormatted);
    });
  }, []);

  return (
    <div className="script-section">
      <button style={{ marginTop: '8px', width: 'fit-content' }} id="runJSCodeButton">
        Run JS code
      </button>
      <div className="slots-wrapper">
        {scriptSlots.map(codeLine => (
          <div className="row-wrapper">
            {codeLine.map(slotContent => (
              <div className={slotContent !== '' ? 'script-block -static' : 'script-block'}>{slotContent}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScriptSection;
