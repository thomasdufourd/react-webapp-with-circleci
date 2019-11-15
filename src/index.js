import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

if (process.env.REACT_APP_MOCK) {
    console.log('=!================================================!=');
    console.log('=!================ MOCK VERSION ==================!=');
    console.log('=!======== NOT SUITABLE FOR  PRODUCTION ==========!=');
    console.log('=!================================================!=');
    require('./mocking/mock');
}

ReactDOM.render(<App />, document.getElementById('root'));