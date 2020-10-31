import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginScreen from './Screens/Login/LoginScreen'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <LoginScreen/>
  </React.StrictMode>,
  document.getElementById('root')
);

