import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from 'overmind-react'
import { store } from 'store';

import * as serviceWorker from './serviceWorker';

import './index.css';

ReactDOM.render(<Provider value={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
