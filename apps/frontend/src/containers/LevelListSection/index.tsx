import { IconButton } from '../../components/Buttons';
import { LockerIcon, PlayIcon } from '../../components/Icons';
import LevelOption from '../../components/LevelOption';
import Typography from '../../components/Typography';
import colors from '../../styling/_colors.module.scss';
import './index.scss';

import type { TLevel } from '../../levels';

type TProps = {
  additionalInfo?: string;
  isLocked: boolean;
  levelsWithScore: TLevel[];
  sectionName: string;
  setLevel: React.Dispatch<React.SetStateAction<TLevel>>;
};

const LevelsListSection = ({ additionalInfo, isLocked, levelsWithScore, sectionName, setLevel }: TProps) => (
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
      {isLocked ? (
        <div className="level-list-section__locked-overlay">
          <LockerIcon fill={colors['color-neutral-white']} size={69} />
        </div>
      ) : null}
      {!isLocked ? (
        <IconButton
          className="level-list-section__button"
          icon={<PlayIcon fill={colors['color-primary-300']} size={24} />}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-expect-error
          onClick={() => (document.getElementById(`${sectionName}-container`).scrollLeft -= 100)}
        />
      ) : (
        <div />
      )}
      {levelsWithScore.map((level: TLevel) => (
        <LevelOption isLocked={isLocked} level={level} key={level.name} setLevel={setLevel} />
      ))}
      {!isLocked ? (
        <IconButton
          className="level-list-section__button -right"
          icon={<PlayIcon fill={colors['color-primary-300']} size={24} />}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-expect-error
          onClick={() => (document.getElementById(`${sectionName}-container`).scrollLeft += 100)}
        />
      ) : null}
    </div>
  </div>
);

export default LevelsListSection;
