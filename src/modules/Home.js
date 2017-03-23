import React, { Component } from 'react';
import {
  Panel, Button
} from 'react-bootstrap';
import { Link } from 'react-router';

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
        <Routine
          title="Test Routine"
          oneLiner="Will Kim"
          description="This is a test routine"
          />
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
        <Link to="/newroutine"><Button bsStyle="default">Create New Routine</Button></Link>
      </div>
    )
  }
}

export default Home;
