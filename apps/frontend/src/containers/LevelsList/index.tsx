import { CartIcon, PlayIcon } from '../../components/Icons';
import { IconButton } from '../../components/Buttons';
import LevelOption from '../../components/LevelOption';
import levels, { TLevel } from '../../levels';
import Typography from '../../components/Typography';

import colors from '../../styling/_colors.module.scss';
import './index.scss';

type TProps = {
  setLevel: React.Dispatch<React.SetStateAction<TLevel>>;
};

const LevelsList = ({ setLevel }: TProps) => {
  const renderListSection = (sectionName: string, levels: TLevel[], additionalInfo?: string) => (
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
          onClick={() => (document.getElementById(`${sectionName}-container`).scrollLeft -= 100)}
        />
        {levels.map((level: TLevel) => (
          <LevelOption level={level} key={level.name} setLevel={setLevel} />
        ))}
        <IconButton
          className="level-list__button -right"
          icon={<PlayIcon fill={colors['color-primary-300']} size={24} />}
          onClick={() => (document.getElementById(`${sectionName}-container`).scrollLeft += 100)}
        />
      </div>
    </div>
  );

  return (
    <section className="level-list">
      <header className="level-list__header">
        <Typography color="primary-600" variant="heading1">
          JavaScript Learner
        </Typography>
        <div className="level-list__header-wrapper">
          <Typography color="primary-600" variant="subtitle1">
            Total points earned: x
          </Typography>
          <IconButton icon={<CartIcon size={55} fill={colors['color-primary-400']} />} onClick={() => {}} />
        </div>
      </header>
      <main>
        {
          <>
            {renderListSection('Fundamentals', levels.fundamentals)}
            {renderListSection(
              'Data Types and Functions',
              levels.dataTypesAndFunctions,
              'To unlock this section you have to complete at least 3 levels with 2 out of 3 stars',
            )}
            {renderListSection(
              'Statements and Logical Operations',
              levels.dataTypesAndFunctions,
              'To unlock this section you have to complete at least 6 levels with 2 out of 3 stars',
            )}
          </>
        }
      </main>
    </section>
  );
};

export default LevelsList;
