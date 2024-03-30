import { useState } from 'react';

import './index.css';

const HTMLSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(prevState => !prevState);

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
        <div style={{ marginBottom: '8px' }}>
          <textarea cols={60} disabled rows={10}>{`
          <!DOCTYPE html>
          <html>
            <body>
              <p id="demo">JavaScript can change HTML content.</p>
            </body>
          </html>
          `}</textarea>
        </div>
      )}
    </>
  );
};

export default HTMLSection;
