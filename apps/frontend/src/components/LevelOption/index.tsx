import { convertLevelScore, isBigDesktop } from '../utils';
import { IconButton } from '../Buttons';
import { LockerIcon, PlayIcon, StarEmptyIcon, StarFilledIcon } from '../../components/Icons';
import Link from '../Routing/Link';
import Typography from '../Typography';
import type { TLevel } from '../../levels';

import colors from '../../styling/_colors.module.scss';
import './index.scss';

type TProps = {
  isLocked: boolean;
  level: TLevel;
  setLevel: React.Dispatch<React.SetStateAction<TLevel>>;
};

const LevelOption = ({ isLocked, level, setLevel }: TProps) => (
  <div className={`level-option ${isLocked ? '-locked' : ''}`}>
    <div className="level-option__header">
      <Typography color="neutral-white" variant="subtitle2">
        {level.name}
      </Typography>
    </div>
    {!isLocked ? (
      <>
        <div className="level-option__score">
          {convertLevelScore(level?.score || 0).map((scoreValue, index) =>
            scoreValue ? (
              <StarFilledIcon key={index} size={isBigDesktop ? 56 : 48} />
            ) : (
              <StarEmptyIcon key={index} size={isBigDesktop ? 56 : 48} />
            ),
          )}
        </div>
        <Link className="level-option__link" href="/level">
          <IconButton
            className="level-option__button"
            icon={<PlayIcon fill={colors['color-green-100']} size={18} />}
            onClick={() => {
              setLevel(level);
            }}
          />
        </Link>
      </>
    ) : (
      <div className="level-option__icon">
        <LockerIcon fill={colors['color-neutral-white']} size={69} />
      </div>
    )}
  </div>
);

export default LevelOption;
