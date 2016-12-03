import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import './main.css'

import Layout from './components/Layout';
import GamesContainer from './components/GamesContainer';
import MatchContainer from './components/MatchContainer';
import Sports from './components/Sports';


//redux stuff
import { Provider } from 'react-redux'


import store from './store'


ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path='/'  component={Layout} store={store}>
      <IndexRoute key='0' component={Sports} store={store} />
      <Route path='games' key='1' component={GamesContainer} store={store}></Route>
      <Route path='match' key='2' component={MatchContainer} store={store}></Route>
    </Route>
  </Router>

  </Provider>
  ,
  document.getElementById('root')
);
