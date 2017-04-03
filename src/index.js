import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './modules/App';
import LoginContainer from './modules/Login';
import Home from './modules/Home';
import Signup from './modules/Signup';
import NewRoutine from './modules/NewRoutine';
import RoutineDetails from './modules/RoutineDetails';
import Edit from './modules/EditRoutine';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" history={browserHistory} component={App} >
    <IndexRoute history={browserHistory} component={Home}/>
      <Route path="/login" history={browserHistory} component={LoginContainer}/>
      <Route path="/home" history={browserHistory} component={Home}/>
      <Route path="/routine/:routineID" component={RoutineDetails}/>
      <Route path="/signup" history={browserHistory} component={Signup}/>
      <Route path="/newroutine" component={NewRoutine}/>
      <Route path="/edit" component={Edit}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
