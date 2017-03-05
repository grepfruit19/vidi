import React, { Component } from 'react';
import {
  Panel
} from 'react-bootstrap';

class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <h2>Your Managed Routines</h2>
        <Routine title="Sample"/>
      </div>
    );
  }
}

class Routine extends Component{
  render() {
    return (
      <div>
        <Panel className="routine">
          <h4>Routine: {this.props.title}</h4>
        </Panel>
      </div>
    )
  }
}

export default Home;
