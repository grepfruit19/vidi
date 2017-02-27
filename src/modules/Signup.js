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
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordValidation: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event, index) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <form className="login">
        <h2>Health Coach Sign Up</h2>
        <FormGroup controlId="formUsername">
          <Col componentClass={ControlLabel} sm={2}>
            Email Address
          </Col>
          <Col sm={10}>
            <FormControl
              name="email"
              value={this.state.email}
              type="email"
              placeholder="Email Address (E.g. coach@health.com)"
              onChange={this.handleInputChange} />
          </Col>
        </FormGroup>
        <FormGroup controlId="formPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl
              name="password"
              value={this.state.password}
              type="password"
              placeholder="Password"
              onChange={this.handleInputChange} />
          </Col>
        </FormGroup>
        <FormGroup controlId="formPassValidation">
          <Col componentClass={ControlLabel} sm={2}>
            Re-enter Password
          </Col>
          <Col sm={10}>
            <FormControl
              name="passwordValidation"
              value={this.state.passwordValidation}
              type="password"
              placeholder="Verify Password"
              onChange={this.handleInputChange} />
          </Col>
        </FormGroup>
        <Button bsStyle="primary">Sign Up</Button>
      </form>
    )
  }
}

export default Signup;
