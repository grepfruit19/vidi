import React, { Component } from 'react';

import { Link } from 'react-router';
import Parse from 'parse';

import '../index.css';

class Home extends Component {
  constructor(props){
    super(props);
    if (Parse.User.current()===null){
      this.props.route.history.push("/login");
    }
  }
  render() {
    return (
      <div className="Home">
        <h2>Your Managed Routines</h2>
        <RoutineContainer />
      </div>
    );
  }
}

class RoutineContainer extends Component {
  constructor(props){
    super(props);
    let routines = Parse.User.current().get("routinesOwned");
    let routineDisplay = [];
    let counter = 0;
    routines.forEach((current) => {
      routineDisplay.push(
        <Routine
          key={counter++}
          routineObject={current}/>
      );
    });
    this.state = {
      routines: routineDisplay
    }
  }
  render() {
    return (
      <div>
        {this.state.routines}
        <Link to="/newroutine"><button>New Routine</button></Link>
      </div>
    )
  }
}

class Routine extends Component{
  constructor(props){
    super(props);
    this.state = {
      routine: this.props.routineObject
    }
  }

//TODO: Set up the edit page.
  render() {
    return (
      <div className="card">
        <h4>Routine: {this.state.routine.get("title")}</h4>
        <p>Author: {this.state.routine.get("oneLiner")}</p>
        <p>description: {this.state.routine.get("description")}</p>
        <Link to={{
          pathname: "/routine/" + this.state.routine.id,
          state: {routine: this.state.routine}
        }}><button>Detailed View</button></Link>
      </div>
    )
  }
}

export default Home;
