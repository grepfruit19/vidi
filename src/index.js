import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './modules/App';
import LoginContainer from './modules/Login';
import Home from './modules/Home';
import Signup from './modules/Signup';
import NewRoutine from './modules/NewRoutine';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <Route path="/login" component={LoginContainer}/>
      <Route path="/home" component={Home}/>
      <Route path="/signup" router={Router} component={Signup}/>
      <Route path="/newroutine" component={NewRoutine}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
