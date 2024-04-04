type TProps = {
  info: {
    content: string;
    id: number;
  };
};

const CodeBlock = ({ info }: TProps) => (
  <div className="code-block" id={info.id.toString()}>
    {info.content}
  </div>
);

export default CodeBlock;
