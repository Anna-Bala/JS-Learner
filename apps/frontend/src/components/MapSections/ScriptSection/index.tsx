import { useEffect } from 'react';

import './index.css';

const ScriptSection = () => {
  useEffect(() => {
    const codeEditor = document.getElementById('codeEditor') as HTMLTextAreaElement;
    const runJSCodeButton = document.getElementById('runJSCodeButton') as HTMLButtonElement;
    const output = document.getElementById('output') as HTMLIFrameElement;

    runJSCodeButton?.addEventListener('click', () => {
      const inputValue = codeEditor?.value?.replace(
        'document',
        "document.getElementById('resultIframe').contentWindow.document",
      );

      const result = eval(inputValue);
      output.textContent = result;
    });
  }, []);

  return (
    <div className="script-section">
      <button style={{ marginTop: '8px', width: 'fit-content' }} id="runJSCodeButton">
        Run JS code
      </button>
      {[1, 2, 3, 4, 5].map(() => (
        <div className="block-slot"></div>
      ))}
      <textarea id="codeEditor"></textarea>
    </div>
  );
};

export default ScriptSection;
