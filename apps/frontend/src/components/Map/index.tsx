import { useEffect, useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';

import { CodeBlocksSection, MenuSection, ResultSection, ScriptSection, TaskSection } from '../MapSections';
import { HTMLModal, InstructionsModal, TaskModal } from '../Modals';
import ChatAI from '../ChatAI';
import DebuggingTools from '../DebuggingTools';
import type { TLevel } from '../../levels';

import './index.scss';

type TProps = {
  level: TLevel;
};

export type TAllDroppedCodeBlocksInScriptSlots = {
  [key: string]: {
    id: number;
    content: string;
  };
} | null;

const Map = ({ level }: TProps) => {
  const [isHTMLModalOpen, setIsHTMLModalOpen] = useState(false);
  const [isInstructionsModalOpen, setIsInstructionsModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [allDroppedCodeBlocksInScriptSlots, setAllDroppedCodeBlocksInScriptSlots] =
    useState<TAllDroppedCodeBlocksInScriptSlots>(null);

  const toggleIsHTMLModalOpen = () => setIsHTMLModalOpen(prevState => !prevState);
  const toggleIsInstructionsModalOpen = () => setIsInstructionsModalOpen(prevState => !prevState);
  const toggleIsTaskModalOpen = () => setIsTaskModalOpen(prevState => !prevState);

  const appendKeydownActions = (event: KeyboardEvent) => {
    if (event.code === 'KeyH') toggleIsHTMLModalOpen();
    if (event.code === 'KeyI') toggleIsInstructionsModalOpen();
    if (event.code === 'KeyK' || event.code === 'Tab') toggleIsTaskModalOpen();
  };

  useEffect(() => {
    document.addEventListener('keydown', appendKeydownActions);

    return () => {
      document.removeEventListener('keydown', appendKeydownActions);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over) {
      const sourceId = active.id as number;
      const sourceContent = level.codeBlocks[sourceId - 1];
      const destinationId = over.id;

      setAllDroppedCodeBlocksInScriptSlots(prevState => {
        const updatedState = Object.keys(prevState || {}).reduce((acc, droppableId) => {
          if (prevState?.[droppableId as keyof typeof prevState]?.id === sourceId) {
            (acc[droppableId as keyof typeof acc] as TAllDroppedCodeBlocksInScriptSlots) = null;
          } else {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
            (acc[droppableId as keyof typeof acc] as TAllDroppedCodeBlocksInScriptSlots) = prevState?.[droppableId];
          }
          return acc;
        }, {});

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        updatedState[destinationId as keyof typeof updatedState] = {
          id: sourceId,
          content: sourceContent,
        };

        return updatedState;
      });
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="map-wrapper">
        <div className="map-content">
          <div style={{ display: 'flex', flexDirection: 'row', gap: '24px' }}>
            <TaskSection challanges={level.challanges} openTaskModal={toggleIsTaskModalOpen} />
            <MenuSection handleInfoIconButtonClick={toggleIsInstructionsModalOpen} level={level} />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'row', gap: '16px' }}>
            <CodeBlocksSection
              allDroppedCodeBlocksInScriptSlots={allDroppedCodeBlocksInScriptSlots}
              codeBlocks={level.codeBlocks}
              codeBlocksInCorrectOrder={level.codeBlocksInCorrectOrder}
            />
            <ScriptSection
              allDroppedCodeBlocksInScriptSlots={allDroppedCodeBlocksInScriptSlots}
              codeBlocksInCorrectOrder={level.codeBlocksInCorrectOrder}
              scriptSlots={level.scriptSlots}
            />
            {level.resultIFrameSrcDoc && <ResultSection resultIFrameSrcDoc={level.resultIFrameSrcDoc} />}
          </div>
          <DebuggingTools level={level} />
          <ChatAI challangeQuestions={level.challangeQuestions} />
        </div>
        <HTMLModal
          htmlSourceCode={level.htmlSourceCode}
          isOpen={isHTMLModalOpen}
          onPrimaryAction={toggleIsHTMLModalOpen}
        />
        <InstructionsModal isOpen={isInstructionsModalOpen} onPrimaryAction={toggleIsInstructionsModalOpen} />
        <TaskModal
          isOpen={isTaskModalOpen}
          levelDescription={level.description}
          onPrimaryAction={toggleIsTaskModalOpen}
        />
      </div>
    </DndContext>
  );
};

export default Map;
