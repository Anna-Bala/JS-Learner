import ModalWrapper from '../ModalWrapper';
import Typography from '../../Typography';

import './index.scss';

type TProps = {
  isOpen: boolean;
  levelDescription: string;
  onPrimaryAction: () => void;
};

const TaskModal = ({ isOpen, levelDescription, onPrimaryAction }: TProps) => (
  <ModalWrapper
    color="neutral"
    isOpen={isOpen}
    onPrimaryAction={onPrimaryAction}
    primaryActionText="close"
    title="Level knowledge"
  >
    <Typography className="task-modal__content" color="neutral-black" variant="body1">
      {levelDescription}
    </Typography>
  </ModalWrapper>
);

export default TaskModal;
