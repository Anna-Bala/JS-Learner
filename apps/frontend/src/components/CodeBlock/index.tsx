import './index.scss';

type TProps = {
  className?: string;
  variant?: 'default' | 'error' | 'static' | 'slot';
  info?: {
    content: string;
    id: number;
  };
};

const CodeBlock = ({ className, info, variant = 'default' }: TProps) => (
  <div className={`code-block code-block__${variant} ${className}`} id={info?.id.toString()}>
    {info?.content || null}
  </div>
);

export default CodeBlock;
