import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Competitors from './pages/Competitors'
import Formation from './pages/Formation'
import Results from './pages/Results'
import App from './App'

import { Provider } from 'react-redux'
import storeConfig from './store/storeConfig'

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

const store = storeConfig()

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Competitors} exact />
          <Route path="/formation" component={Formation} exact />
          <Route path="/results" component={Results} exact />
          <Route path="/tests" component={App} exact />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);