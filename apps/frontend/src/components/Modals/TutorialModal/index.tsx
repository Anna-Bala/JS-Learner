import { useState } from 'react';

import { BookIcon, HomeIcon, InfoIcon, PlayIcon, TrophyIcon } from '../../../components/Icons';
import colors from '../../../styling/_colors.module.scss';
import ModalWrapper from '../ModalWrapper';
import Typography from '../../Typography';

import './index.scss';

type TProps = {
  closeModal: (tutorialPageTitle: string) => void;
  isOpen: boolean;
};

const TutorialModal = ({ closeModal, isOpen }: TProps) => {
  const [page, setPage] = useState(1);

  const primaryActionText = {
    1: 'Scoring System',
    2: 'Solving challanges',
    3: 'Code blocks section',
    4: 'Instructions section',
    5: 'Menu section',
    6: 'Result section',
    7: 'AI chat',
    8: 'Finish tutorial',
    9: 'Close',
  };

  const handleCloseModal = () =>
    closeModal(
      page === 1 ? 'Welcome to the Drag&Code!' : primaryActionText[(page - 1) as keyof typeof primaryActionText],
    );

  const handlePrimaryAction = () => {
    if (page < 9) setPage(prevState => ++prevState);
    else handleCloseModal();
  };

  const pageContent = {
    1: (
      <>
        <Typography color="green-800" variant="body1">
          Drag&Code provides you 22 JavaScript challanges divided into three categories: Fundamentals, Data Types and
          Functions, Statements and Logical Operations.
        </Typography>
        <br />
        <Typography color="green-800" variant="body1">
          After finishing those challanges you will have a solid knowledge of the JavaScript programming language.
        </Typography>
        <br />
        <Typography color="green-800" variant="body1">
          Before you start your learning journey, please get familiar with the scoring system and the introduction to
          solving challanges.
        </Typography>
      </>
    ),
    2: (
      <>
        <Typography color="green-800" variant="body1">
          The maximum score for each challange are 3 stars.
        </Typography>
        <br />
        <Typography color="green-800" variant="body1">
          How do you loose each star?
          <ul>
            <li>You complete the challenge after the 10 minutes timer</li>
            <li>By using the AI chat while solving the challenge</li>
            <li>When your first solution for the challenge is incorrect</li>
          </ul>
        </Typography>
        <br />
        <div className="icon-row">
          <Typography color="green-800" variant="body1">
            You can compare your score with others by checking the leaderboard
          </Typography>
          <TrophyIcon fill={colors['color-green-600']} size={32} />
        </div>
      </>
    ),
    3: (
      <>
        <Typography color="green-800" variant="body1">
          Here's an example of the challange view based on the very first challange "Finding elements by the ID".
        </Typography>
        <img alt="Challange view" src="/challange.png" />
        <br />
        <Typography color="green-800" variant="body1">
          Let's go through each section visible on the screen.
        </Typography>
      </>
    ),
    4: (
      <>
        <img alt="Instructions section" src="/code-blocks-section.png" />
        <br />
        <Typography color="green-800" variant="body1">
          Here's a place where you build your JavaScript code. By using the <b>drag & drop</b> mechanism you can fill
          out the missing blocks of the code.
        </Typography>
      </>
    ),
    5: (
      <>
        <img alt="Code blocks section" src="/instructions-section.png" />
        <br />
        <Typography color="green-800" variant="body1">
          This section provides you with a list of problems that your JavaScript code should solve. Pressing the "Learn"
          button will open up a dialog with a new portion of knowledge about the JavaScript programming language. You
          can also open it by pressing the Tab or the "k" key on your keyboard.
        </Typography>
      </>
    ),
    6: (
      <>
        <img alt="Menu section" src="/menu-section.png" />
        <br />
        <Typography color="green-800" variant="body1">
          In this section you can see:
          <ul>
            <li>Challenge title</li>
            <li>Number of stars you have left for the challenge. You always start a challenge with all three stars.</li>
            <li>Time counter that always starts with 10 minutes. When it drops to zero you will lose one star.</li>
            <li>
              <div className="icon-row">
                Pressing the home button
                <HomeIcon fill={colors['color-green-600']} size={32} />
                will redirect you to a list of challanges.
              </div>
              Your progress <b>will not get saved!</b>
            </li>
            <li>
              <div className="icon-row">
                Info button
                <InfoIcon fill={colors['color-green-600']} size={32} />
                invokes a dialog with keyboard control instructions.
              </div>
              You can also open this dialog by pressing the "i" key on your keyboard.
            </li>
            <li>
              <div className="icon-row">
                Play button
                <PlayIcon fill={colors['color-green-600']} size={32} />
                runs your JavaScript code.
              </div>
              If you think that your sollution for the challange is correct use this button or press the "j" key on your
              keyboard.
            </li>
          </ul>
        </Typography>
      </>
    ),
    7: (
      <>
        <Typography color="green-800" variant="body1">
          As you might already know JavaScript can manipulate the content generated by the HTML code. Result section
          shows what content is generated from the HTML code.
        </Typography>
        <img alt="Result section" src="/result-section.png" width="70%" style={{ margin: 'auto' }} />
        <br />
        <Typography color="green-800" variant="body1">
          To check the HTML code press the "h" button on your keyboard.
        </Typography>
        <img alt="HTML code" src="/html-modal.png" />
        <br />
        <Typography color="green-800" variant="body1">
          After you run your JavaScript code you will see how the content of the result section changes after the code
          execution.
        </Typography>
      </>
    ),
    8: (
      <>
        <Typography color="green-800" variant="body1">
          At the bottom right corner you will find a green button that opens up the AI chat. If you get stuck while
          solving a challange you can use it to ask any JavaScript related question or use one of the predefined
          questions.
        </Typography>
        <img alt="AI chat" src="/ai-chat.png" />
        <br />
        <Typography color="green-800" variant="body1">
          Remember that using the AI chat costs you one star.
        </Typography>
      </>
    ),
    9: (
      <>
        <Typography color="green-800" variant="subtitle2">
          Congratulations!
        </Typography>
        <br />
        <div className="icon-row">
          <Typography color="green-800" variant="body1">
            You've finished the tutorial. To open it again press the book icon
          </Typography>
          <BookIcon fill={colors['color-green-600']} size={32} />
        </div>
        <Typography color="green-800" variant="body1">
          Good luck and have fun!
        </Typography>
      </>
    ),
  };

  return (
    <ModalWrapper
      color="green"
      isOpen={isOpen}
      onPrimaryAction={handlePrimaryAction}
      primaryActionText={primaryActionText[page as keyof typeof primaryActionText]}
      handleClose={handleCloseModal}
      title={page === 1 ? 'Welcome to the Drag&Code!' : primaryActionText[(page - 1) as keyof typeof primaryActionText]}
    >
      {pageContent[page as keyof typeof pageContent]}
    </ModalWrapper>
  );
};

export default TutorialModal;
