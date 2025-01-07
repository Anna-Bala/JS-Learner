import { useEffect, useMemo, useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import './index.scss';

import { handleRunJSCode } from '../../utils';
import DraggableCodeBlock from '../../DraggableCodeBlock';
import RunCodeModal from '../../Modals/RunCodeModal';

import type { TAllDroppedCodeBlocksInScriptSlots, TTimer } from '../../Map';

type TProps = {
  allDroppedCodeBlocksInScriptSlots: TAllDroppedCodeBlocksInScriptSlots;
  codeBlocks: string[];
  codeBlocksInCorrectOrder: string[];
  handleScoreChange: (action: 'jsRun' | 'useAI' | 'pass10Minutes') => void;
  setIsCorrectlySolved: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  timer: TTimer;
};

const CodeBlocksSection = ({
  allDroppedCodeBlocksInScriptSlots,
  codeBlocks,
  codeBlocksInCorrectOrder,
  handleScoreChange,
  setIsCorrectlySolved,
  timer,
}: TProps) => {
  const [isRunCodeModalOpen, setIsRunCodeModalOpen] = useState(false);
  const [didCodeRun, setDidCodeRun] = useState(false);

  const toggleIsRunCodeModalOpen = () => {
    setIsRunCodeModalOpen(prevState => !prevState);
    timer.pauseTimer();
  };

  const handleIsRunCodeModalClose = () => {
    setIsRunCodeModalOpen(false);
    timer.resumeTimer();
  };

  const { setNodeRef } = useDroppable({
    id: 'code-blocks-section',
  });

  const runJsCode = () => {
    setDidCodeRun(true);
    handleRunJSCode(codeBlocksInCorrectOrder, handleScoreChange, setIsCorrectlySolved, toggleIsRunCodeModalOpen);
  };

  const allDroppedCodeBlocksInScriptSlotsKeys = Object.keys(allDroppedCodeBlocksInScriptSlots || {}).filter(
    key => key !== 'code-blocks-section',
  );
  const allDroppedCodeBlocksInScriptSlotIds = useMemo(
    () =>
      allDroppedCodeBlocksInScriptSlots !== null
        ? allDroppedCodeBlocksInScriptSlotsKeys
            .map(key => (allDroppedCodeBlocksInScriptSlots?.[key]?.id || 0) - 1)
            .filter(id => id > -1)
        : [],
    [allDroppedCodeBlocksInScriptSlots, allDroppedCodeBlocksInScriptSlotsKeys],
  );

  useEffect(() => {
    if (allDroppedCodeBlocksInScriptSlotIds.length === codeBlocksInCorrectOrder.length && !didCodeRun) {
      setIsRunCodeModalOpen(true);
      timer.pauseTimer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allDroppedCodeBlocksInScriptSlotIds.length, codeBlocksInCorrectOrder.length, didCodeRun]);

  return (
    <>
      <div className="code-blocks-section" ref={setNodeRef}>
        {codeBlocks.map((content, index) =>
          allDroppedCodeBlocksInScriptSlotIds.includes(index) ? null : (
            <DraggableCodeBlock key={index} info={{ id: index + 1, content }} />
          ),
        )}
      </div>
      <RunCodeModal handleClose={handleIsRunCodeModalClose} isOpen={isRunCodeModalOpen} onPrimaryAction={runJsCode} />
    </>
  );
};

export default CodeBlocksSection;
