import { useEffect, useState } from 'react';

import { CodeBlocksSection, MenuSection, ResultSection, ScriptSection, TaskSection } from '../MapSections';
import { HTMLModal } from '../Modals';
import Character from '../Character';
import ChatAI from '../ChatAI';
import DebuggingTools from '../DebuggingTools';
import type { TLevel } from '../../levels';

import './index.scss';

type TProps = {
  level: TLevel;
};

const Map = ({ level }: TProps) => {
  const [isHTMLModalOpen, setIsHTMLModalOpen] = useState(false);

  const toggleIsHTMLModalOpen = () => setIsHTMLModalOpen(prevState => !prevState);

  const appendKeydownActions = (event: KeyboardEvent) => {
    if (event.code === 'KeyH') toggleIsHTMLModalOpen();
  };

  useEffect(() => {
    document.addEventListener('keydown', appendKeydownActions);

    return () => {
      document.removeEventListener('keydown', appendKeydownActions);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="map-wrapper">
      <div className="map-content">
        <Character />
        <div style={{ display: 'flex', flexDirection: 'row', gap: '24px' }}>
          <TaskSection challanges={level.challanges} description={level.description} />
          <MenuSection level={level} />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'row', gap: '16px' }}>
          <CodeBlocksSection codeBlocks={level.codeBlocks} />
          <ScriptSection evaluateChallange={level.evaluateChallange} scriptSlots={level.scriptSlots} />
          <ResultSection resultIFrameSrcDoc={level.resultIFrameSrcDoc} />
        </div>
        <DebuggingTools level={level} />
        <ChatAI challangeQuestions={level.challangeQuestions} />
      </div>
      <HTMLModal
        htmlSourceCode={level.htmlSourceCode}
        isOpen={isHTMLModalOpen}
        onPrimaryAction={toggleIsHTMLModalOpen}
      />
    </div>
  );
};

export default Map;
