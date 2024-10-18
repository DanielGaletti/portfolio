import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(
  "%c Welcome to my portfolio! 🎉 \n" +
  "%c This is a space to showcase my work and skills.\n" +
  "%c If you're curious, feel free to explore! 😊\n" +
  "%c Remember to be kind and respectful! ❤️",
  "font-size: 24px; color: #3498db; font-weight: bold;", // Style for the welcome message
  "font-size: 18px; color: #2ecc71;", // Style for the description
  "font-size: 18px; color: #e74c3c;", // Style for the exploration message
  "font-size: 18px; color: #f39c12;"  // Style for the reminder
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
