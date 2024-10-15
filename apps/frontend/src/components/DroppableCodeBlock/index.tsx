import { useDroppable } from '@dnd-kit/core';
import colors from '../../styling/_colors.module.scss';
import './index.scss';

type TProps = {
  className?: string;
  disabled: boolean;
  id: string;
  variant?: 'default' | 'error' | 'static' | 'slot';
  info?: {
    content: string;
    id: number;
  };
};

const DroppableCodeBlock = ({ className = '', disabled, id, info, variant = 'default' }: TProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
    disabled,
  });

  const style = isOver
    ? {
        backgroundColor: isOver ? colors['color-green-300'] : undefined,
        borderColor: isOver ? colors['color-green-500'] : undefined,
      }
    : undefined;

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
