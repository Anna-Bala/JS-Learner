import './index.css';

import CodeBlock from './CodeBlock';

const CodeBlocksSection = () => (
  <div className="code-blocks-section">
    {[1, 2, 3, 4, 5].map(id => (
      <CodeBlock key={id} info={{ id }} />
    ))}
  </div>
);

export default CodeBlocksSection;
