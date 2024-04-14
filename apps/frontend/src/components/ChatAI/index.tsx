import openai from './openai';

const ChatAI = () => {
  const askAI = async () => {
    const response = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo',
    });
  };

  return <button onClick={askAI}>Run Open AI request</button>;
};

export default ChatAI;
