import { useRef } from 'react';
import { IconButton } from '../../components/Buttons';
import { LockerIcon, PlayIcon } from '../../components/Icons';
import LevelOption from '../../components/LevelOption';
import Typography from '../../components/Typography';
import colors from '../../styling/_colors.module.scss';
import './index.scss';

import type { TLevel } from '../../levels';

type TProps = {
  additionalInfo?: string;
  isSectionLocked: boolean;
  levelsWithScore: TLevel[];
  sectionName: string;
  setLevel: React.Dispatch<React.SetStateAction<TLevel>>;
};

const LevelsListSection = ({ additionalInfo, isSectionLocked, levelsWithScore, sectionName, setLevel }: TProps) => {
  const scrollInterval = useRef<NodeJS.Timeout>(null);

  const startScrolling = (direction: 'right' | 'left') => {
    const container = document.getElementById(`${sectionName}-container`);
    if (!container) return;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    scrollInterval.current = setInterval(() => {
      container.scrollLeft += direction === 'left' ? -10 : 10;
    }, 10);
  };

  const stopScrolling = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      scrollInterval.current = null;
    }
  };

  return (
    <div className="level-list-section">
      <Typography color="primary-600" variant="heading3">
        {sectionName}
      </Typography>
      {additionalInfo ? (
        <Typography color="primary-600" variant="subtitle1">
          {additionalInfo}
        </Typography>
      ) : null}
      <div className="level-list-section__levels" id={`${sectionName}-container`}>
        {isSectionLocked ? (
          <div className="level-list-section__locked-overlay">
            <LockerIcon fill={colors['color-neutral-white']} size={69} />
          </div>
        ) : null}
        {!isSectionLocked ? (
          <IconButton
            className="level-list-section__button"
            icon={<PlayIcon fill={colors['color-primary-300']} size={24} />}
            onMouseDown={() => startScrolling('left')}
            onMouseUp={stopScrolling}
            onMouseLeave={stopScrolling}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
            onClick={() => (document.getElementById(`${sectionName}-container`).scrollLeft -= 100)}
          />
        ) : (
          <div />
        )}
        {levelsWithScore.map((level: TLevel, index) => {
          const isLocked = isSectionLocked || (index === 0 ? false : (levelsWithScore[index - 1]?.score || 0) < 2);
          return <LevelOption isLocked={isLocked} level={level} key={level.name} setLevel={setLevel} />;
        })}
        {!isSectionLocked ? (
          <IconButton
            className="level-list-section__button -right"
            icon={<PlayIcon fill={colors['color-primary-300']} size={24} />}
            onMouseDown={() => startScrolling('right')}
            onMouseUp={stopScrolling}
            onMouseLeave={stopScrolling}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
            onClick={() => (document.getElementById(`${sectionName}-container`).scrollLeft += 100)}
          />
        ) : null}
      </div>
    </div>
  );
};

export default LevelsListSection;
