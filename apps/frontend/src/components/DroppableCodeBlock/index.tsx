import { useDroppable } from '@dnd-kit/core';
import './index.scss';

type TProps = {
  className?: string;
  id: string;
  variant?: 'default' | 'error' | 'static' | 'slot';
  info?: {
    content: string;
    id: number;
  };
};

const DroppableCodeBlock = ({ className = '', id, info, variant = 'default' }: TProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const style = {
    backgroundColor: isOver ? 'red' : undefined,
  };

  return (
    <div
      className={`code-block code-block__${variant} ${className}`}
      id={info?.id.toString()}
      ref={setNodeRef}
      style={style}
    >
      {info?.content || null}
    </div>
  );
};

export default DroppableCodeBlock;
