import { useEffect, useState } from 'react';

import { getAllUsersScore } from '../../../api/utils';
import ModalWrapper from '../ModalWrapper';
import Typography from '../../Typography';

import './index.scss';

type TProps = {
  isOpen: boolean;
  onPrimaryAction: () => void;
};

const RankingModal = ({ isOpen, onPrimaryAction }: TProps) => {
  const [isError, setIsError] = useState(false);
  const [userScoreByHighest, setUserScoreByHighest] = useState({});

  useEffect(() => {
    getAllUsersScore()
      .then(data => data.json())
      .then(data => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        const sortedData = Object.entries(data).sort((a, b) => b[1] - a[1]);
        setUserScoreByHighest(Object.fromEntries(sortedData));
      })
      .catch(() => setIsError(true));
  }, []);

  return (
    <ModalWrapper
      color={isError ? 'red' : 'primary'}
      isOpen={isOpen}
      onPrimaryAction={onPrimaryAction}
      primaryActionText="close"
      title="Ranking"
    >
      {isError ? (
        <Typography color="red-800" variant="body1">
          An error occurred while fetching data. Please try again.
        </Typography>
      ) : (
        <div>
          <Typography color="primary-800" variant="body1">
            Here you can check how many stars did other users have earned and compare your score.
          </Typography>
          <div className="ranking-table">
            <div className="ranking-table__header">
              <Typography className="ranking-table__header-item" color="neutral-white" variant="body2">
                Placement
              </Typography>
              <Typography className="ranking-table__header-item" color="neutral-white" variant="body2">
                Username
              </Typography>
              <Typography className="ranking-table__header-item" color="neutral-white" variant="body2">
                Stars
              </Typography>
            </div>
            {Object.keys(userScoreByHighest).map((userName, index) => {
              const isUserScore = userName === localStorage.getItem('userName');
              return (
                <div className={`ranking-table__row ${isUserScore ? '-blue' : ''}`}>
                  <div className="ranking-table__row-item">
                    <div className={`ranking-table__score ${isUserScore ? '-white' : ''}`}>
                      <Typography
                        className={`ranking-table__score-text ${isUserScore ? '-blue' : ''}`}
                        color="primary-800"
                        variant="body1"
                      >
                        {index + 1}
                      </Typography>
                    </div>
                  </div>

                  <div className="ranking-table__row-item">
                    <Typography color={isUserScore ? 'neutral-white' : 'primary-800'} variant="body1">
                      {userName}
                    </Typography>
                  </div>

                  <div className="ranking-table__row-item">
                    <Typography color={isUserScore ? 'neutral-white' : 'primary-800'} variant="body1">
                      {userScoreByHighest[userName as keyof typeof userScoreByHighest]}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </ModalWrapper>
  );
};

export default RankingModal;
