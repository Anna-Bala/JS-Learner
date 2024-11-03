import { useEffect, useState } from 'react';

import { getLevelsWithScore } from '../../api/utils';
import levels, { TLevel } from '../../levels';
import LevelsListSection from '../LevelListSection';
import Typography from '../../components/Typography';

import './index.scss';

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
            <LevelsListSection
              levelsWithScore={allLevelsWithScore.fundamentals}
              sectionName="Fundamentals"
              setLevel={setLevel}
            />
            <LevelsListSection
              additionalInfo="To unlock this section you have to complete at least 3 levels with 2 out of 3 stars"
              levelsWithScore={allLevelsWithScore.dataTypesAndFunctions}
              sectionName="Data Types and Functions"
              setLevel={setLevel}
            />
            <LevelsListSection
              additionalInfo="To unlock this section you have to complete at least 6 levels with 2 out of 3 stars"
              levelsWithScore={allLevelsWithScore.statementsAndLogicalOperations}
              sectionName="Statements and Logical Operations"
              setLevel={setLevel}
            />
          </>
        }
      </main>
    </section>
  );
};

export default LevelsList;
