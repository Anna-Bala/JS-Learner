import ModalWrapper from '../ModalWrapper';
import Typography from '../../Typography';

type TProps = {
  handleClose: () => void;
  isOpen: boolean;
  onPrimaryAction: () => void;
};

const RunCodeModal = ({ handleClose, isOpen, onPrimaryAction }: TProps) => (
  <ModalWrapper
    color="green"
    handleClose={handleClose}
    isOpen={isOpen}
    onPrimaryAction={onPrimaryAction}
    primaryActionText="Yes"
    title="Run JavaScript"
  >
    <Typography color="green-800" variant="body1">
      Are you sure you want to run your JavaScript code?
    </Typography>
  </ModalWrapper>
);

export default RunCodeModal;
