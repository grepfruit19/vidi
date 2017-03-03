import React, { Component } from 'react';
import {
  FormGroup, Col, FormControl, ControlLabel, Button
} from 'react-bootstrap';


class Login extends Component {
  render() {
    return(
      <form className="login">
        <h2>Health Coach Login</h2>
        <FormGroup controlID="formUsername">
          <Col componentClass={ControlLabel} sm={2}>
            Username
          </Col>
          <Col sm={10}>
            <FormControl type="username" placeholder="Username" />
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
        <Button bsStyle="primary">Log In</Button>
      </form>
    )
  }
}

export default Login;
