import React, { Component } from 'react';
import {
  FormGroup, Col, FormControl, ControlLabel, Button
} from 'react-bootstrap';

//import './App.css';

class Signup extends Component {
  render() {
    return (
      <div>
        <SignupForm/>
      </div>
    );
  }
}

class SignupForm extends Component {
  render() {
    return (
      <form className="login">
        <h2>Health Coach Sign Up</h2>
        <FormGroup controlID="formUsername">
          <Col componentClass={ControlLabel} sm={2}>
            Email Address
          </Col>
          <Col sm={10}>
            <FormControl type="username" placeholder="Email Address" />
          </Col>
        </FormGroup>
        <FormGroup controlID="formPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>
        <FormGroup controlID="formPassValidation">
          <Col componentClass={ControlLabel} sm={2}>
            Re-enter Password
          </Col>
          <Col sm={10}>
            <FormControl type="passwordValidation" placeholder="Verify Password" />
          </Col>
        </FormGroup>
        <Button bsStyle="primary">Sign Up</Button>
      </form>
    )
  }
}

export default Signup;
