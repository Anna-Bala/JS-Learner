import { useState } from 'react';

import { Button } from '../../Buttons';
import TaskModal from '../../Modals/TaskModal';
import './index.scss';

type TProps = {
  challanges: string[];
  description: string;
};

const TaskSection = ({ challanges, description }: TProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleIsModalOpen = () => setIsModalOpen(prevState => !prevState);

  return (
    <>
      <div className="task-section">
        <ul>
          {challanges.map(challange => (
            <li key={challange}>{challange}</li>
          ))}
        </ul>
        <Button className="task-section__button" color="neutral" onClick={toggleIsModalOpen} variant="small">
          Learn
        </Button>
      </div>
      <TaskModal isOpen={isModalOpen} levelDescription={description} onPrimaryAction={toggleIsModalOpen} />
    </>
  );
};

export default TaskSection;
