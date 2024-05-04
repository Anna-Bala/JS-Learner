import { useState } from 'react';

import { AI_SYSTEM_MESSAGE, AI_USER_MESSAGE, DEFAULT_FIRST_MESSAGE, OPEN_AI_MODEL } from './constants';
import { Button, PanelButton } from '../Buttons';
import Divider from '../Divider';
import Message from './Message';
import openai from './openai';
import TextInput from '../Form/TextInput';

import type { TQuestion } from '../../levels';

import './index.scss';

type TProps = {
  challangeQuestions: TQuestion[];
};

const ChatAI = ({ challangeQuestions }: TProps) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([DEFAULT_FIRST_MESSAGE]);
  const [userQuestion, setUserQuestion] = useState('');

  const toggleChatOpen = () => setIsChatOpen(prevState => !prevState);
  const toggleIsLoading = () => setIsLoading(prevState => !prevState);

  const handleSendButton = () => {
    setUserQuestion('');
    askAI({ chat: userQuestion, prompt: userQuestion });
  };

  const askAI = async (question: TQuestion) => {
    setMessages(prevState => [...prevState, question.chat]);
    setIsError(false);
    toggleIsLoading();

    await openai.chat.completions
      .create({
        messages: [
          {
            role: 'system',
            content: AI_SYSTEM_MESSAGE,
          },
          {
            role: 'user',
            content: `${AI_USER_MESSAGE} - "${question.prompt}"."`,
          },
        ],
        model: OPEN_AI_MODEL,
      })
      .then(response => {
        const aiAnswer = response?.choices?.[0]?.message?.content || '';
        setMessages(prevState => [...prevState, aiAnswer]);
      })
      .catch(() => setIsError(true))
      .finally(() => toggleIsLoading());
  };

  return (
    <div className="chatAI">
      <PanelButton color="green" className="chatAI__toggle-button" onClick={toggleChatOpen} />

      {isChatOpen && (
        <div className="chatAI__wrapper">
          {messages.map((message, index) => (
            <Message content={message} variant={index % 2 === 0 ? 'recived' : 'send'} />
          ))}
          {isLoading && <p style={{ marginTop: '16px' }}>Loading...</p>}
          {isError && <p style={{ marginTop: '16px' }}>Something went wrong!</p>}
          <div className="chatAI__send-section">
            <Divider />
            <div className="chatAI__questions">
              {challangeQuestions.map(question => (
                <button onClick={() => askAI(question)}>{question.chat}</button>
              ))}
            </div>
            <TextInput
              className="chatAI__text-input"
              color="neutral"
              multiline={2}
              name="userQuestion"
              onChange={setUserQuestion}
              value={userQuestion}
            />
            <Button
              className="chatAI__send-button"
              color="green"
              disabled={!userQuestion}
              onClick={handleSendButton}
              variant="small"
            >
              Send
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatAI;
