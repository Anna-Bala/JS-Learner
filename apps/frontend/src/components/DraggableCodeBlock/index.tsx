import { useDraggable } from '@dnd-kit/core';
import './index.scss';

type TProps = {
  className?: string;
  variant?: 'default' | 'error' | 'static' | 'slot';
  info: {
    content: string;
    id: number;
  };
};

const DraggableCodeBlock = ({ className = '', info, variant = 'default' }: TProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: info.id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button
      className={`code-block code-block__${variant} ${className}`}
      id={info?.id.toString()}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {info?.content || null}
    </button>
  );
};

export default DraggableCodeBlock;
