import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/**
 * Render header/form (contained in app component)
 */
ReactDOM.render(
  <React.StrictMode>
    <h1>EE461L HW6</h1>
    <h2>Samir Mohsin</h2>
    <h2>EID: ssm3392</h2>
    <h2>Enter 'Samir' below and see what happens</h2>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

