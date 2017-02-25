import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import App from './modules/App';
import LoginContainer from './modules/Login';
import Home from './modules/Home';
import Signup from './modules/Signup';
import NewRoutine from './modules/NewRoutine';
import AuthService from './util/AuthService'

const auth = new AuthService('MvtKfaE0MMwTE6Sw7jXxJVudpvDhbzcY', 'wtk219.auth0.com');

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} auth={auth}>
      <Route path="/login" component={LoginContainer}/>
      <Route path="/home" component={Home}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/newroutine" component={NewRoutine}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
