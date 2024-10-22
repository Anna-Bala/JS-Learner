import { useState } from 'react';

import { EyeClosedIcon, EyeOpenIcon } from '../Icons';
import { IconButton } from '../Buttons';

import colors from '../../styling/_colors.module.scss';
import './index.scss';

type TProps = {
  className?: string;
  color: 'neutral' | 'green' | 'primary' | 'orange' | 'red';
  isPasswordInput?: boolean;
  multiline?: number;
  name: string;
  onChange: (value: string) => void;
  value: string;
};

const TextInput = ({ className = '', color, isPasswordInput = false, multiline, name, onChange, value }: TProps) => {
  const [isPasswordInputVisible, setIsPasswordInputVisible] = useState(false);

  const toggleIsPasswordInputVisible = () => setIsPasswordInputVisible(prevState => !prevState);

  const isTextArea = !!multiline;

  const sharedProps = {
    name,
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(event?.target?.value || ''),
    value,
  };

  return isTextArea ? (
    <textarea
      className={`text-input text-input-color__${color} ${className}`}
      {...sharedProps}
      rows={multiline}
    ></textarea>
  ) : (
    <div className="text-input__wrapper">
      <input
        className={`text-input text-input-color__${color} ${className}`}
        id={name}
        type={isPasswordInput && !isPasswordInputVisible ? 'password' : 'text'}
        {...sharedProps}
      ></input>
      {isPasswordInput ? (
        <IconButton
          className="text-input__icon"
          icon={
            !isPasswordInputVisible ? (
              <EyeClosedIcon fill={colors['color-orange-600']} size={24} />
            ) : (
              <EyeOpenIcon fill={colors['color-orange-600']} size={24} />
            )
          }
          onClick={toggleIsPasswordInputVisible}
        />
      ) : null}
    </div>
  );
};

export default TextInput;
