import './index.css';

type TProps = {
  challanges: string[];
  description: string;
};

const TaskSection = ({ challanges, description }: TProps) => (
  <div className="task-section">
    <p>{description}</p>
    <ul>
      {challanges.map(challange => (
        <li key={challange}>{challange}</li>
      ))}
    </ul>
  </div>
);

export default TaskSection;
