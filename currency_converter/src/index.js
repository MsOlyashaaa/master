import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';


// Initialize Firebase
initializeApp({
  apiKey: 'AIzaSyD6tCJeg2OQ-uuN-yUeM0-QIp_M8nXsWgw',
  authDomain: 'currency-converter-14062022.firebaseapp.com',
  projectId: 'currency-converter-14062022',
  storageBucket: 'currency-converter-14062022.appspot.com',
  messagingSenderId: '1015309353156',
  appId: '1:1015309353156:web:650a54de75d3871d770991',
  measurementId: 'G-CF0146C1YG'
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
