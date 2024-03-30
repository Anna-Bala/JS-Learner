import { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

import './index.css';

type TProps = {
  htmlSourceCode: string;
};

const HTMLSection = ({ htmlSourceCode }: TProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(prevState => !prevState);

  useEffect(() => {
    Prism.highlightAll();
  }, [isModalOpen]);

  return (
    <>
      <div className="html-section">
        <button onClick={toggleModal}>Show HTML code</button>
      </div>
      <iframe
        id="htmlIframe"
        srcDoc='<p id="demo">JavaScript can change HTML content.</p>'
        style={{ visibility: 'hidden', width: 0, height: 0 }}
      ></iframe>
      {isModalOpen && (
        <div className="Code" style={{ marginBottom: '8px' }}>
          <pre>
            <code className="language-html">{htmlSourceCode}</code>
          </pre>
        </div>
      )}
    </>
  );
};

export default HTMLSection;
