import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unstated';
import 'babel-polyfill';
import 'normalize.css';
import App from './App';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'),
);
