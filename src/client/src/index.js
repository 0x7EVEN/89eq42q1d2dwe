import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {LoginProvider} from './context/loginContext';
import LoginContextProvider from './components/Contexts/LoginContext';
import RegisterContextProvider from './components/Contexts/RegisterContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginContextProvider>
        <RegisterContextProvider>
          <LoginProvider>
            <App />
          </LoginProvider>
        </RegisterContextProvider>
      </LoginContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
