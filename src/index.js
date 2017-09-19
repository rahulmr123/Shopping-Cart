import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Rou from './components/router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import shopping from './reducers';
let store = createStore(shopping);

ReactDOM.render(
  <Provider store={store}>
    <Rou />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
