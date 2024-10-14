import './index.scss';

import DraggableCodeBlock from '../../DraggableCodeBlock';

type TProps = {
  codeBlocks: string[];
};

const CodeBlocksSection = ({ codeBlocks }: TProps) => (
  <div className="code-blocks-section">
    {codeBlocks.map((content, index) => (
      <DraggableCodeBlock key={index} info={{ id: index, content }} />
    ))}
  </div>
);

export default CodeBlocksSection;
