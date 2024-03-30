import './index.css';

type TProps = {
  description: string;
};

const TaskSection = ({ description }: TProps) => <div className="task-section">{description}</div>;

export default TaskSection;
