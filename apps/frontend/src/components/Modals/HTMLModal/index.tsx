import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

import ModalWrapper from '../ModalWrapper';
import './index.scss';

type TProps = {
  htmlSourceCode: string;
  isOpen: boolean;
  onPrimaryAction: () => void;
};

const HTMLModal = ({ htmlSourceCode, isOpen, onPrimaryAction }: TProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [isOpen]);

  return (
    <ModalWrapper
      color="orange"
      isOpen={isOpen}
      onPrimaryAction={onPrimaryAction}
      primaryActionText="close"
      title="HTML code"
    >
      <iframe
        id="htmlIframe"
        srcDoc='<p id="demo">JavaScript can change HTML content.</p>'
        style={{ display: 'none', width: 0, height: 0 }}
      ></iframe>
      <div className="code-wrapper">
        <pre>
          <code className="language-html">{htmlSourceCode}</code>
        </pre>
      </div>
    </ModalWrapper>
  );
};

export default HTMLModal;
