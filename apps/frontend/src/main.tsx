import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import SoundMutedProvider from './context/SoundMutedContext.tsx';
import './firebase.tsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SoundMutedProvider>
      <App />
    </SoundMutedProvider>
  </React.StrictMode>,
);
