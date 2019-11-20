import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './app_bundles';
import { Provider } from 'redux-bundler-react';

import './css/index.css';
import App from './app_components/App';

const store = window.store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);