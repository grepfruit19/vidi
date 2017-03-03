import React, { Component } from 'react';
import { Link } from 'react-router';
import {
  FormGroup, Col, FormControl, ControlLabel, Button
} from 'react-bootstrap';
//import AuthService from '../util/AuthService';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 2,
      right: 10,
      username: '',
      password: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  // static propTypes = {
  //   location: T.object,
  //   auth: T.instanceOf(AuthService)
  // }
  render() {
    //const { auth } = this.props;
    return(
      <form className="login">
        <h2>Health Coach Login</h2>
        <FormGroup controlId="formUsername">
          <Col componentClass={ControlLabel} sm={this.state.left}>
            Username
          </Col>
          <Col sm={this.state.right}>
            <FormControl
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleInputChange}
              placeholder="Username" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formPassword">
          <Col componentClass={ControlLabel} sm={this.state.left}>
            Password
          </Col>
          <Col sm={this.state.right}>
            <FormControl
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              placeholder="Password" />
          </Col>
        </FormGroup>
        <Link to={'/signup'}>
          <Button bsStyle="default">Sign up</Button>
        </Link>
      </form>
    )
  }
}

export default Login;
