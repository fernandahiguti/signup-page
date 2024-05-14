import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
document.body.style.backgroundColor = '#fbf7f5';
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
