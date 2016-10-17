import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './main.css'

import Layout from './components/Layout';
import Games from './components/Games';
import Match from './components/Match';
import Sports from './components/Sports';


//redux stuff
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const initialState = {
  sport: 'none defined yet'
}

function sportApp(state = initialState, action) {
  switch (action.type) {
    case 'CHOOSE_SPORT':
      return Object.assign({}, state, {
        sport: action.sport
      })
  default:
    return state
  }
}

const store = createStore(sportApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Layout} store={store}>
        <IndexRoute component={Sports} store={store} />
        <Route path='games' component={Games} store={store}></Route>
        <Route path='match' component={Match} store={store}></Route>
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
