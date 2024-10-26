import { convertLevelScore } from '../utils';
import { IconButton } from '../Buttons';
import { PlayIcon, StarEmptyIcon, StarFilledIcon } from '../../components/Icons';
import Link from '../Routing/Link';
import Typography from '../Typography';
import type { TLevel } from '../../levels';

import colors from '../../styling/_colors.module.scss';
import './index.scss';

type TProps = {
  level: TLevel;
  setLevel: React.Dispatch<React.SetStateAction<TLevel>>;
};

const LevelOption = ({ level, setLevel }: TProps) => (
  <div className="level-option">
    <div className="level-option__header">
      <Typography color="neutral-white" variant="subtitle2">
        {level.name}
      </Typography>
    </div>
    <div className="level-option__score">
      {convertLevelScore(level.score).map((scoreValue, index) =>
        scoreValue ? <StarFilledIcon key={index} size={48} /> : <StarEmptyIcon key={index} size={48} />,
      )}
    </div>
    <Typography className="level-option__points" color="green-600" variant="body1">
      Points earned: x
    </Typography>
    <Link className="level-option__link" href="/level">
      <IconButton
        className="level-option__button"
        icon={<PlayIcon fill={colors['color-green-100']} size={18} />}
        onClick={() => {
          setLevel(level);
        }}
      />
    </Link>
  </div>
);

export default LevelOption;
