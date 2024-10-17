import { Button } from '../../Buttons';
import './index.scss';

type TProps = {
  challanges: string[];
  openTaskModal: () => void;
};

const TaskSection = ({ challanges, openTaskModal }: TProps) => (
  <div className="task-section">
    <ul>
      {challanges.map(challange => (
        <li key={challange}>{challange}</li>
      ))}
    </ul>
    <Button className="task-section__button" color="neutral" onClick={openTaskModal} variant="small">
      Learn
    </Button>
  </div>
);

export default TaskSection;
