import './index.scss';

type TProps = {
  className?: string;
  color: 'neutral' | 'green' | 'primary' | 'orange' | 'red';
  multiline?: number;
  name: string;
  onChange: (value: string) => void;
  value: string;
};

const TextInput = ({ className = '', color, multiline, name, onChange, value }: TProps) => {
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
    <input className={`text-input text-input-color__${color} ${className}`} {...sharedProps}></input>
  );
};

export default TextInput;
