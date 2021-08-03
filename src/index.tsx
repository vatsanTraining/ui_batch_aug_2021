import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import reducer from './store/reducer';
import { ArticleState, ArticleAction } from './types';
import {store} from '../src/store/Store';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
  </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

