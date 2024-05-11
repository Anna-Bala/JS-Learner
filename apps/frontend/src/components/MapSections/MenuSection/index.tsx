import Typography from '../../Typography';

import { HomeIcon, InfoIcon, StarEmptyIcon, StarFilledIcon } from '../../Icons';
import { IconButton } from '../../Buttons';
import type { TLevel } from '../../../levels';

import colors from '../../../styling/_colors.module.scss';
import './index.scss';

type TProps = {
  handleInfoIconButtonClick: () => void;
  level: TLevel;
};

const convertLevelScore = (levelScore: number) => {
  const result = [0, 0, 0];

  for (let i = 0; i < 3; i++) {
    if (levelScore - (i + 1) > -1) {
      result[i] = 1;
    }
  }

  return result;
};

const iconsColor = colors['color-primary-400'];

const MenuSection = ({ handleInfoIconButtonClick, level }: TProps) => (
  <div className="menu-section">
    <div className="menu-section__level-info">
      <Typography color="primary-700" variant="subtitle2">
        {level.name}
      </Typography>
      <div className="menu-section__stars">
        {convertLevelScore(2).map((scoreValue, index) =>
          scoreValue ? <StarFilledIcon key={index} size={48} /> : <StarEmptyIcon key={index} size={48} />,
        )}
      </div>
    </div>
    <div className="menu-section__actions">
      <IconButton icon={<HomeIcon fill={iconsColor} size={48} />} onClick={() => {}} />
      <IconButton icon={<InfoIcon fill={iconsColor} size={48} />} onClick={handleInfoIconButtonClick} />
    </div>
  </div>
);

export default MenuSection;
