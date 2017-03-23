import React, { Component } from 'react';

import { Link } from 'react-router';
import Parse from 'parse';

import '../index.css';

class Home extends Component {
  constructor(props){
    super(props);
    if (this.props.currentUser===null){
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
      console.log(current);
      routineDisplay.push(
        <Routine
          key={counter++}
          title={current.get("title")}
          oneLiner={current.get("oneLiner")}
          description={current.get("description")}/>
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
      </div>
    )
  }
}

class Routine extends Component{
  render() {
    return (
      <div>
        <h4>Routine: {this.props.title}</h4>
        <p>Author: {this.props.oneLiner}</p>
        <p>description: {this.props.description}</p>
      </div>
    )
  }
}

export default Home;
