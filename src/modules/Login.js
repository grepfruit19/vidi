import React, { Component, PropTypes as T } from 'react';
import { Link } from 'react-router';
import {
  FormGroup, Col, FormControl, ControlLabel, Button
} from 'react-bootstrap';


class Login extends Component {

  render() {
    return(
      <form className="login">
        <h2>Health Coach Login</h2>
        <FormGroup controlId="formUsername">
          <Col componentClass={ControlLabel} sm={2}>
            Username
          </Col>
          <Col sm={10}>
            <FormControl type="username" placeholder="Username" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>
        <Link to={'/signup'}>
          <Button bsStyle="default">Sign up</Button>
        </Link>
        <Button bsStyle="primary">Log In</Button>
      </form>
    )
  }
}

export default Login;
