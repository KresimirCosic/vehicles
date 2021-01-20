import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import reportWebVitals from './reportWebVitals';
import { configuration } from './constants/firebase';
import './styles/index.scss';
import App from './components/App';

firebase.initializeApp(configuration);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
