import type { ReactNode } from 'react';

import { Button, IconButton } from '../Buttons';
import CloseIcon from '../Icons/Close';
import Divider from '../Divider';
import Typography from '../Typography';

import colors from '../../styling/_colors.module.scss';
import './index.scss';

type TProps = {
  children: ReactNode;
  color: 'neutral' | 'green' | 'primary' | 'orange' | 'red';
  handleClose?: () => void;
  isOpen: boolean;
  onPrimaryAction: () => void;
  primaryActionText: string;
  title: string;
};

const ModalWrapper = ({ children, color, handleClose, isOpen, onPrimaryAction, primaryActionText, title }: TProps) =>
  isOpen ? (
    <div className="modal-shadow">
      <div className={`modal-wrapper modal-wrapper-color__${color}`}>
        <div className="modal-wrapper__header">
          <Typography color={`${color}-700`} variant="subtitle2">
            {title}
          </Typography>
          {handleClose && (
            <IconButton icon={<CloseIcon size={20} fill={colors['color-neutral-900']} />} onClick={handleClose} />
          )}
        </div>

        <Divider />

        <div className="modal-wrapper__main">{children}</div>

        <div className="modal-wrapper__footer">
          <Button color={color} variant="small" onClick={onPrimaryAction}>
            {primaryActionText}
          </Button>
        </div>
      </div>
    </div>
  ) : null;

export default ModalWrapper;
