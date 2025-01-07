import Typography from '../Typography';

type TProps = {
  content: string;
  variant: 'send' | 'recived';
};

const Message = ({ content, variant }: TProps) => {
  const isRecived = variant === 'recived';

  return (
    <div className={`message ${isRecived ? '-recived' : '-send'}`}>
      <Typography color={isRecived ? 'neutral-700' : 'green-800'} variant="body1">
        {content}
      </Typography>
    </div>
  );
};

export default Message;
