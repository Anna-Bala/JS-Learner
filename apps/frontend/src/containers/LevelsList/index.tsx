import { useEffect, useState } from 'react';
import mixpanel from 'mixpanel-browser';

import { BookIcon, MusicOffIcon, MusicOnIcon, TrophyIcon } from '../../components/Icons';
import { COMPLETE_TUTORIAL_API_URL } from '../../api/constants';
import { getLevelsWithScore } from '../../api/utils';
import { isBigDesktop } from '../../components/utils';
import { RankingModal, TutorialModal } from '../../components/Modals';
import { useSoundMuted } from '../../context/SoundMutedContext';
import colors from '../../styling/_colors.module.scss';
import IconButton from '../../components/Buttons/IconButton';
import levels, { TLevel } from '../../levels';
import LevelsListSection from '../LevelListSection';
import Typography from '../../components/Typography';

import './index.scss';

type TAllLevels = { fundamentals: TLevel[]; dataTypesAndFunctions: TLevel[]; statementsAndLogicalOperations: TLevel[] };
type TScoreInfo = { score: number; id: number; level: { id: number; name: string } };

type TProps = {
  setLevel: React.Dispatch<React.SetStateAction<TLevel>>;
  isTutorialModalOpen: boolean;
  setIsTutorialModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const LevelsList = ({ setLevel, isTutorialModalOpen, setIsTutorialModalOpen }: TProps) => {
  const [allLevelsWithScore, setAllLevelsWithScore] = useState<TAllLevels>(levels);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [isRankingModalOpen, setIsRankingModalOpen] = useState(false);
  const [numberOfLevelsWithMin2Stars, setNumberOfLevelsWithMin2Stars] = useState(0);

  const toggleIsRankingModalOpen = () => {
    if (!isRankingModalOpen) {
      mixpanel.track('Leaderboards Open');
    }

    setIsRankingModalOpen(prevState => !prevState);
  };

  const userId = localStorage.getItem('userId');

  const handleCloseTutorialModal = async (tutorialPageTitle: string, timeSpendInTutorialInSeconds: number) => {
    setIsTutorialModalOpen(false);

    mixpanel.track('Tutorial Completed', {
      tutorialPageTitle,
      timeSpendInTutorialInSeconds,
    });

    await fetch(COMPLETE_TUTORIAL_API_URL(Number(userId)), {
      method: 'PUT',
    }).then(() => {
      localStorage.setItem('completedTutorial', '1');
    });
  };

  useEffect(() => {
    if (!userId) {
      setAllLevelsWithScore(levels);
      return;
    }

    setIsLoadingData(true);

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

        const levelsWithMin2Stars = data.filter((scoreInfo: TScoreInfo) => scoreInfo.score >= 2);
        setNumberOfLevelsWithMin2Stars(levelsWithMin2Stars.length);
      })
      .catch(() => {
        setAllLevelsWithScore(levels);
      })
      .finally(() => {
        setIsLoadingData(false);
      });
  }, [userId]);

  const { isMuted, toggleSoundMute } = useSoundMuted();

  return (
    <>
      {isLoadingData ? (
        <div className="level-list__loading">
          <span className="loader"></span>
        </div>
      ) : null}
      <section className="level-list">
        <header className="level-list__header">
          <Typography color="primary-600" variant="heading1">
            Drag&Code
          </Typography>
          <div className="level-list__header-wrapper">
            <IconButton
              icon={
                isMuted ? (
                  <MusicOffIcon fill={colors['color-primary-600']} size={isBigDesktop ? 70 : 60} />
                ) : (
                  <MusicOnIcon fill={colors['color-primary-600']} size={isBigDesktop ? 70 : 60} />
                )
              }
              onClick={toggleSoundMute}
            />
            <IconButton
              icon={<BookIcon fill={colors['color-primary-600']} size={isBigDesktop ? 56 : 48} />}
              onClick={() => setIsTutorialModalOpen(true)}
            />
            <IconButton
              icon={<TrophyIcon fill={colors['color-primary-600']} size={isBigDesktop ? 56 : 48} />}
              onClick={toggleIsRankingModalOpen}
            />
          </div>
        </header>
        <main>
          {
            <>
              <LevelsListSection
                isSectionLocked={false}
                levelsWithScore={allLevelsWithScore.fundamentals}
                sectionName="Fundamentals"
                setLevel={setLevel}
              />
              <LevelsListSection
                additionalInfo="To unlock this section you have to complete at least 3 levels with 2 out of 3 stars"
                isSectionLocked={numberOfLevelsWithMin2Stars < 3}
                levelsWithScore={allLevelsWithScore.dataTypesAndFunctions}
                sectionName="Data Types and Functions"
                setLevel={setLevel}
              />
              <LevelsListSection
                additionalInfo="To unlock this section you have to complete at least 6 levels with 2 out of 3 stars"
                isSectionLocked={numberOfLevelsWithMin2Stars < 6}
                levelsWithScore={allLevelsWithScore.statementsAndLogicalOperations}
                sectionName="Statements and Logical Operations"
                setLevel={setLevel}
              />
            </>
          }
        </main>
      </section>
      <RankingModal isOpen={isRankingModalOpen} onPrimaryAction={toggleIsRankingModalOpen} />
      <TutorialModal isOpen={isTutorialModalOpen} closeModal={handleCloseTutorialModal} />
    </>
  );
};

export default LevelsList;
