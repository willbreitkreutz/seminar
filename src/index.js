import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './app_bundles';
import { Provider } from 'redux-bundler-react';
import cache from './utils/cache';

import './css/index.css';
import App from './app_components/App';

cache.getAll().then((initialData) => {
  const store = window.store = createStore(initialData);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
    document.getElementById('root')
  );
});