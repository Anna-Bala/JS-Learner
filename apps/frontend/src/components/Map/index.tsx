import { useEffect, useRef, useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';

import { CodeBlocksSection, MenuSection, ResultSection, ScriptSection, TaskSection } from '../MapSections';
import { HTMLModal, InstructionsModal, LevelSummaryModal, TaskModal } from '../Modals';
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
  const [score, setScore] = useState(3);
  const [jsRunErrored, setJsRunErrored] = useState(false);
  const [userUsedAI, setUserUsedAI] = useState(false);
  const [isPassedTimeLimit, setIsPassedTimeLimit] = useState(false);
  const [isCorrectlySolved, setIsCorrectlySolved] = useState<boolean | undefined>(undefined);

  const [timeLeft, setTimeLeft] = useState(600);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [isHTMLModalOpen, setIsHTMLModalOpen] = useState(false);
  const [isInstructionsModalOpen, setIsInstructionsModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [allDroppedCodeBlocksInScriptSlots, setAllDroppedCodeBlocksInScriptSlots] =
    useState<TAllDroppedCodeBlocksInScriptSlots>(null);

  const toggleIsHTMLModalOpen = () => setIsHTMLModalOpen(prevState => !prevState);
  const toggleIsInstructionsModalOpen = () => setIsInstructionsModalOpen(prevState => !prevState);
  const toggleIsTaskModalOpen = () => setIsTaskModalOpen(prevState => !prevState);
  const closeLevelSummaryModal = () => setIsCorrectlySolved(undefined);

  const substractScoreByOne = () => setScore(prevState => prevState - 1);

  const handleScoreChange = (action: 'jsRun' | 'useAI' | 'pass10Minutes') => {
    if (action === 'jsRun') {
      if (!jsRunErrored) substractScoreByOne();
      setJsRunErrored(true);
    }
    if (action === 'useAI') {
      if (!userUsedAI) substractScoreByOne();
      setUserUsedAI(true);
    }
    if (action === 'pass10Minutes') {
      if (!isPassedTimeLimit) substractScoreByOne();
      setIsPassedTimeLimit(true);
    }
  };

  const startTimer = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(intervalRef.current || undefined);
          intervalRef.current = null;
          handleScoreChange('pass10Minutes');
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current!);
    intervalRef.current = null;
  };

  const appendKeydownActions = (event: KeyboardEvent) => {
    if (event.target instanceof HTMLElement) {
      if (event?.target?.classList.contains('text-input')) return;
    }

    if (event.code === 'KeyH') toggleIsHTMLModalOpen();
    if (event.code === 'KeyI') toggleIsInstructionsModalOpen();
    if (event.code === 'KeyK' || event.code === 'Tab') toggleIsTaskModalOpen();
  };

  useEffect(() => {
    document.addEventListener('keydown', appendKeydownActions);
    startTimer();

    return () => {
      document.removeEventListener('keydown', appendKeydownActions);
      stopTimer();
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
            <MenuSection
              currentScore={score}
              handleInfoIconButtonClick={toggleIsInstructionsModalOpen}
              handleScoreChange={handleScoreChange}
              level={level}
              setIsCorrectlySolved={setIsCorrectlySolved}
              timeLeft={timeLeft}
            />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'row', gap: '16px' }}>
            <CodeBlocksSection
              allDroppedCodeBlocksInScriptSlots={allDroppedCodeBlocksInScriptSlots}
              codeBlocks={level.codeBlocks}
              codeBlocksInCorrectOrder={level.codeBlocksInCorrectOrder}
              handleScoreChange={handleScoreChange}
              setIsCorrectlySolved={setIsCorrectlySolved}
            />
            <ScriptSection
              allDroppedCodeBlocksInScriptSlots={allDroppedCodeBlocksInScriptSlots}
              codeBlocksInCorrectOrder={level.codeBlocksInCorrectOrder}
              handleScoreChange={handleScoreChange}
              scriptSlots={level.scriptSlots}
              setIsCorrectlySolved={setIsCorrectlySolved}
            />
            {level.resultIFrameSrcDoc && <ResultSection resultIFrameSrcDoc={level.resultIFrameSrcDoc} />}
          </div>
          <DebuggingTools level={level} />
          <ChatAI challangeQuestions={level.challangeQuestions} handleScoreChange={handleScoreChange} />
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
        <LevelSummaryModal
          handleClose={closeLevelSummaryModal}
          isCorrectlySolved={isCorrectlySolved}
          isOpen={isCorrectlySolved !== undefined}
          levelNameDb={level.dbName}
          score={score}
        />
      </div>
    </DndContext>
  );
};

export default Map;
