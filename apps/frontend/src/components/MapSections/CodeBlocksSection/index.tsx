import { useDroppable } from '@dnd-kit/core';
import './index.scss';

import DraggableCodeBlock from '../../DraggableCodeBlock';

import type { TAllDroppedCodeBlocksInScriptSlots } from '../../Map';

type TProps = {
  allDroppedCodeBlocksInScriptSlots: TAllDroppedCodeBlocksInScriptSlots;
  codeBlocks: string[];
};

const CodeBlocksSection = ({ allDroppedCodeBlocksInScriptSlots, codeBlocks }: TProps) => {
  const { setNodeRef } = useDroppable({
    id: 'code-blocks-section',
  });

  const allDroppedCodeBlocksInScriptSlotsKeys = Object.keys(allDroppedCodeBlocksInScriptSlots || {}).filter(
    key => key !== 'code-blocks-section',
  );
  const allDroppedCodeBlocksInScriptSlotIds =
    allDroppedCodeBlocksInScriptSlots !== null
      ? allDroppedCodeBlocksInScriptSlotsKeys.map(key => (allDroppedCodeBlocksInScriptSlots?.[key]?.id || 0) - 1)
      : [];

  return (
    <div className="code-blocks-section" ref={setNodeRef}>
      {codeBlocks.map((content, index) =>
        allDroppedCodeBlocksInScriptSlotIds.includes(index) ? null : (
          <DraggableCodeBlock key={index} info={{ id: index + 1, content }} />
        ),
      )}
    </div>
  );
};

export default CodeBlocksSection;
