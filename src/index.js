import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppTwo from './AppTwo';
import moment from 'moment';
import 'moment-timezone';

// App.jsのpropsに取得した日付を渡す
const getTime = moment().format('YYYY年MM月DD日')
const OneReactElement = React.createElement(App, { time: getTime }, null)
ReactDOM.render(OneReactElement, document.getElementById('AppOne'));
// AppTwo.js
ReactDOM.render(<AppTwo />, document.getElementById('AppTwo'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
