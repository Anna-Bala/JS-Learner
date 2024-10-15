import { useDraggable } from '@dnd-kit/core';
import colors from '../../styling/_colors.module.scss';
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
  const { attributes, active, listeners, setNodeRef, transform } = useDraggable({
    id: info.id,
  });

  const isActive = active?.id === info.id;

  const style = {
    boxShadow: isActive ? `0px 2px 4px 2px ${colors['color-green-400']}` : undefined,
    scale: isActive ? '1.1' : '1',
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    transition: 'scale 300ms',
    zIndex: isActive ? 100 : 1,
  };

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
