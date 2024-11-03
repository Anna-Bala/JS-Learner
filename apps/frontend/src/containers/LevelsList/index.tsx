import { useEffect, useState } from 'react';

import { getLevelsWithScore } from '../../api/utils';
import { IconButton } from '../../components/Buttons';
import { PlayIcon } from '../../components/Icons';
import LevelOption from '../../components/LevelOption';
import levels, { TLevel } from '../../levels';
import Typography from '../../components/Typography';

import colors from '../../styling/_colors.module.scss';
import './index.scss';

const renderListSection = (
  sectionName: string,
  levels: TLevel[],
  setLevel: React.Dispatch<React.SetStateAction<TLevel>>,
  additionalInfo?: string,
) => (
  <div className="level-list__section-wrapper">
    <Typography color="primary-600" variant="heading3">
      {sectionName}
    </Typography>
    <Typography color="primary-600" variant="subtitle1">
      {additionalInfo}
    </Typography>
    <div className="level-list__levels-wrapper" id={`${sectionName}-container`}>
      <IconButton
        className="level-list__button"
        icon={<PlayIcon fill={colors['color-primary-300']} size={24} />}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        onClick={() => (document.getElementById(`${sectionName}-container`).scrollLeft -= 100)}
      />
      {levels.map((level: TLevel) => (
        <LevelOption level={level} key={level.name} setLevel={setLevel} />
      ))}
      <IconButton
        className="level-list__button -right"
        icon={<PlayIcon fill={colors['color-primary-300']} size={24} />}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        onClick={() => (document.getElementById(`${sectionName}-container`).scrollLeft += 100)}
      />
    </div>
  </div>
);

type TAllLevels = { fundamentals: TLevel[]; dataTypesAndFunctions: TLevel[]; statementsAndLogicalOperations: TLevel[] };
type TScoreInfo = { score: number; id: number; level: { id: number; name: string } };

type TProps = {
  setLevel: React.Dispatch<React.SetStateAction<TLevel>>;
};

const LevelsList = ({ setLevel }: TProps) => {
  const [allLevelsWithScore, setAllLevelsWithScore] = useState<TAllLevels>(levels);

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      setAllLevelsWithScore(levels);
      return;
    }

    getLevelsWithScore(userId)
      .then(data => data.json())
      .then(data => {
        if (data.length < 1) {
          setAllLevelsWithScore(levels);
          return;
        }

        const levelKeys = Object.keys(levels) as (keyof typeof newLevelsWithScore)[];
        const newLevelsWithScore = { ...levels };

        data.forEach((scoreInfo: TScoreInfo) => {
          const scoreInfoLevelName = scoreInfo.level.name;

          levelKeys.forEach(levelKey => {
            newLevelsWithScore[levelKey].forEach((level: TLevel, index: number) => {
              if (level.dbName === scoreInfoLevelName) {
                newLevelsWithScore[levelKey][index] = {
                  ...level,
                  score: scoreInfo.score,
                };
              }
            });
          });
        });

        setAllLevelsWithScore(newLevelsWithScore);
      })
      .catch(() => {
        setAllLevelsWithScore(levels);
      });
  }, []);

  return (
    <section className="level-list">
      <header className="level-list__header">
        <Typography color="primary-600" variant="heading1">
          Drag&Code
        </Typography>
        <div className="level-list__header-wrapper">
          <Typography color="primary-600" variant="subtitle1">
            To do: ranking button
          </Typography>
        </div>
      </header>
      <main>
        {
          <>
            {renderListSection('Fundamentals', allLevelsWithScore.fundamentals, setLevel)}
            {renderListSection(
              'Data Types and Functions',
              allLevelsWithScore.dataTypesAndFunctions,
              setLevel,
              'To unlock this section you have to complete at least 3 levels with 2 out of 3 stars',
            )}
            {renderListSection(
              'Statements and Logical Operations',
              allLevelsWithScore.statementsAndLogicalOperations,
              setLevel,
              'To unlock this section you have to complete at least 6 levels with 2 out of 3 stars',
            )}
          </>
        }
      </main>
    </section>
  );
};

export default LevelsList;
