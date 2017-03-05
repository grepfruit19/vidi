import React, { Component } from 'react';
import {
  FormGroup, Col, FormControl, ControlLabel, Button
} from 'react-bootstrap';
import {Link} from 'react-router';
import Parse from 'parse';

class Login extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      left: 2,
      right: 10,
      username: '',
      password: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(){
    Parse.User.logIn(this.state.username, this.state.password).then(function(user){
      window.location = "/home";
    }, function(error){
      alert("Error: " + error.message);
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
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
        <Link to="/signup"><Button bsStyle="default">Sign Up</Button></Link>
        <Button type='button' onClick={this.handleLogin} bsStyle="primary">Login</Button>
      </form>
    )
  }
}

export default Login;
