import './index.scss';

import CodeBlock from '../../CodeBlock';

type TProps = {
  codeBlocks: string[];
};

const CodeBlocksSection = ({ codeBlocks }: TProps) => (
  <div className="code-blocks-section">
    {codeBlocks.map((content, index) => (
      <CodeBlock key={index} info={{ id: index, content }} />
    ))}
  </div>
);

export default CodeBlocksSection;
