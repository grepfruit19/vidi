import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import App from './modules/App';
import Login from './modules/Login';
import Home from './modules/Home';
import Signup from './modules/Signup';
import NewRoutine from './modules/NewRoutine';

import './index.css';




ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/login" component={Login}/>
      <Route path="/home" component={Home}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/newroutine" component={NewRoutine}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
