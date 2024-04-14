import { useState } from 'react';

import { AI_SYSTEM_MESSAGE, AI_USER_MESSAGE, DEFAULT_FIRST_MESSAGE, OPEN_AI_MODEL } from './constants';
import openai from './openai';
import './index.css';

import type { TQuestion } from '../../levels';

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
      <button className="chatAI-button" onClick={toggleChatOpen}>
        {isChatOpen ? 'Close' : 'Open'} AI chat
      </button>

      {isChatOpen && (
        <div className="chatAI-wrapper">
          {messages.map((message, index) => (
            <p className={index % 2 === 0 ? 'chatAI-message -recived' : 'chatAI-message -send'}>{message}</p>
          ))}
          {isLoading && <p style={{ marginTop: '16px' }}>Loading...</p>}
          {isError && <p style={{ marginTop: '16px' }}>Something went wrong!</p>}
          <div className="chatAI-send-section">
            <hr />
            <div className="chatAI-questions">
              {challangeQuestions.map(question => (
                <button onClick={() => askAI(question)}>{question.chat}</button>
              ))}
            </div>
            <div className="chatAI-textbox">
              <textarea
                name="userQuestion"
                onChange={event => setUserQuestion(event?.target?.value || '')}
                value={userQuestion}
              ></textarea>
              <button disabled={!userQuestion} onClick={handleSendButton}>
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatAI;
