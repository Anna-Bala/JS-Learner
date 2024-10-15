import './index.scss';

import DraggableCodeBlock from '../../DraggableCodeBlock';

import type { TAllDroppedCodeBlocksInScriptSlots } from '../../Map';

type TProps = {
  allDroppedCodeBlocksInScriptSlots: TAllDroppedCodeBlocksInScriptSlots;
  codeBlocks: string[];
};

const CodeBlocksSection = ({ allDroppedCodeBlocksInScriptSlots, codeBlocks }: TProps) => {
  const allDroppedCodeBlocksInScriptSlotsKeys = Object.keys(allDroppedCodeBlocksInScriptSlots || {});
  const allDroppedCodeBlocksInScriptSlotIds =
    allDroppedCodeBlocksInScriptSlots !== null
      ? allDroppedCodeBlocksInScriptSlotsKeys.map(key => allDroppedCodeBlocksInScriptSlots?.[key]?.id - 1)
      : [];

  return (
    <div className="code-blocks-section">
      {codeBlocks.map((content, index) =>
        allDroppedCodeBlocksInScriptSlotIds.includes(index) ? null : (
          <DraggableCodeBlock key={index} info={{ id: index + 1, content }} />
        ),
      )}
    </div>
  );
};

export default CodeBlocksSection;
