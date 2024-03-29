import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import { createLogger } from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(loggerMiddleware, thunk))
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

