import ModalWrapper from '../ModalWrapper';
import Typography from '../../Typography';

import './index.scss';

type TProps = {
  isOpen: boolean;
  onPrimaryAction: () => void;
};

const InstructionsModal = ({ isOpen, onPrimaryAction }: TProps) => (
  <ModalWrapper
    color="primary"
    isOpen={isOpen}
    onPrimaryAction={onPrimaryAction}
    primaryActionText="close"
    title="instructions"
  >
    <div className="info-row">
      <Typography color="neutral-black" variant="body1">
        Press
      </Typography>
      <img alt="H key" src="/H-key.png" />
      <Typography color="neutral-black" variant="body1">
        to open modal that will include HTML source code.
      </Typography>
    </div>

    <div className="info-row">
      <Typography color="neutral-black" variant="body1">
        Press
      </Typography>
      <img alt="J key" src="/J-key.png" />
      <Typography color="neutral-black" variant="body1">
        to run JavaScript code.
      </Typography>
    </div>
  </ModalWrapper>
);

export default InstructionsModal;
