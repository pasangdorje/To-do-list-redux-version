import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './components/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

import './index.css';

const auth = new Auth();
let state = {};
window.setState = changes => {
  state = Object.assign({}, state, changes);
  ReactDOM.render(<App {...state} />, document.getElementById('root'));
};

/*eslint no-restricted-globals: 0*/
let initialState = {
  name: 'Pasang',
  auth: auth
};

window.setState(initialState);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
