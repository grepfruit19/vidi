import React, { Component } from 'react';
import {
  FormGroup, Col, FormControl, ControlLabel, Button
} from 'react-bootstrap';
import { Link } from 'react-router';
import Parse from 'parse';

import '../index.css';

class Edit extends Component {
  constructor(props){
    super(props);
    console.log(this.props.location.state);
    this.state = {
      routine: this.props.location.state.routine
    }
  }
  render(){
    return(
      <div>
      <form className="login">
        <h2>Create New Routine</h2>
        <FormGroup controlId="routineTitle">
          <Col componentClass={ControlLabel} sm={this.props.left}>
            Title
          </Col>
          <Col sm={10}>
            <FormControl
              name="routineTitle"
              type="text"
              value={this.props.title}
              onChange={this.handleChange}
              placeholder="Routine Title" />
          </Col>
        </FormGroup>
        <FormGroup controlId="routineTimePeriod">
          <Col componentClass={ControlLabel} sm={this.props.left}>
            Time Period
          </Col>
          <Col sm={10}>
            <FormControl
              name="routineTimePeriod"
              type="number"
              value={this.props.timePeriod}
              onChange={this.handleChange}
              placeholder="Duration (In Weeks)" />
          </Col>
        </FormGroup>
        <FormGroup controlId="routineDescription">
          <Col componentClass={ControlLabel} sm={this.props.left}>
            Description
          </Col>
          <Col sm={10}>
            <FormControl
              maxLength={1000}
              name="routineDescription"
              type="text"
              value={this.props.description}
              onChange={this.handleChange}
              placeholder="Description (Max 160 chars)" />
          </Col>
        </FormGroup>
        {this.props.cards}
      </form>
      </div>
    )
  }
}

export default Edit;
