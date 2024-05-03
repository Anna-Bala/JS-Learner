import './index.scss';

type TProps = {
  className?: string;
  text?: string;
  variant?: 'default' | 'error' | 'static' | 'slot';
};

const CodeBlock = ({ className, text, variant = 'default' }: TProps) => (
  <div className={`code-block code-block__${variant} ${className}`}>{text && <span>{text}</span>}</div>
);

export default CodeBlock;
