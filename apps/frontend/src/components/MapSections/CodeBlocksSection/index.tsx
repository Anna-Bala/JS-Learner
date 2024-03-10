import './index.css';

import CodeBlock from './CodeBlock';

const CodeBlocksSection = () => (
  <div className="code-blocks-section">
    {[1, 2, 3, 4, 5].map(info => (
      <CodeBlock info={info} />
    ))}
  </div>
);

export default CodeBlocksSection;
