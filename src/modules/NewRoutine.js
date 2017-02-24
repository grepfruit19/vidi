import React, { Component } from 'react';
import {
  FormGroup, Col, FormControl, ControlLabel, Button
} from 'react-bootstrap';

//This class handles creation of new routines.
class NewRoutine extends Component {
  constructor(props){
    super(props);
    this.state = {
      left: 2,
      right: 10
    };
  }
  render() {
    return(
      <form className="login">
        <h2>Create New Routine</h2>
        <FormGroup controlID="formTitle">
          <Col componentClass={ControlLabel} sm={this.state.left}>
            Title
          </Col>
          <Col sm={10}>
            <FormControl type="title" placeholder="Routine Title" />
          </Col>
        </FormGroup>
        <FormGroup controlID="formTimePeriod">
          <Col componentClass={ControlLabel} sm={this.state.left}>
            Time Period
          </Col>
          <Col sm={10}>
            <FormControl type="timePeriod" placeholder="Duration (In Weeks)" />
          </Col>
        </FormGroup>
        <FormGroup controlID="formDescription">
          <Col componentClass={ControlLabel} sm={this.state.left}>
            Description
          </Col>
          <Col sm={10}>
            <FormControl maxLength={160} type="description" placeholder="Description (Max 160 chars)" />
          </Col>
        </FormGroup>
        <Button bsStyle="primary">Submit</Button>
      </form>
    )
  }
}

export default NewRoutine;
