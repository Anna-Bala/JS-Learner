import { useEffect } from 'react';

import './index.css';

type TProps = {
  evaluateChallange: () => boolean;
  scriptSlots: string[][];
};

const ScriptSection = ({ evaluateChallange, scriptSlots }: TProps) => {
  const handleJsCodeButtonClick = () => {
    const allCodeBlocks = document.getElementsByClassName('script-block');
    const jsCode = Array.from(allCodeBlocks)
      .map(codeBlock => codeBlock.innerHTML)
      .join('');

    const jsCodeFormatted = jsCode.replaceAll(
      'document',
      "document.getElementById('resultIframe').contentWindow.document",
    );

    try {
      eval(jsCodeFormatted);
    } catch {
      window.alert('INCORRECT :(');
    } finally {
      const result = evaluateChallange();
      if (result) window.alert('CORRECT!');
      else window.alert('INCORRECT :(');
    }
  };

  useEffect(() => {
    const runJSCodeButton = document.getElementById('runJSCodeButton') as HTMLButtonElement;

    runJSCodeButton.removeEventListener('click', handleJsCodeButtonClick);
    runJSCodeButton?.addEventListener('click', handleJsCodeButtonClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
