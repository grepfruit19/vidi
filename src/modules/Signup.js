import React, { Component } from 'react';
import {
  FormGroup, Col, FormControl, ControlLabel, Button
} from 'react-bootstrap';
import Parse from 'parse';

//import './App.css';

class SignupForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordValidation: '',
      authorName: '',
      passwordIsSame: 'success'
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.signup = this.signup.bind(this);
  }

  signup(){
    if (this.state.password!==this.state.passwordValidation){
      alert("Password and Validation do not match");
    } else {
      let user = new Parse.User();
      user.set("username", this.state.email);
      user.set("email", this.state.email);
      user.set("password", this.state.password);
      user.set("authorName", this.state.authorName);
      user.signUp(null, {
        success: function(user){
          window.location = "/home";
        },
        error: function(user, error){
          alert("Error: " + error.code + " " + error.message);
        }
      });
    }
  }

  //This method changes the state when the form data changes. 
  handleInputChange(event, index) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value},function(){
      if (this.state.password===this.state.passwordValidation){
        this.setState({passwordIsSame: "success"})
      } else {
        this.setState({passwordIsSame: "error"});
      }
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
        <FormGroup controlId="formAuthorName">
          <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col>
          <Col sm={10}>
            <FormControl
              name="authorName"
              value={this.state.authorName}
              type="text"
              placeholder="Your name (this will appear on your routines)"
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
        <FormGroup controlId="formPassValidation" validationState={this.state.passwordIsSame}>
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
        <Button onClick={this.signup} bsStyle="primary">Sign Up</Button>
      </form>
    )
  }
}

export default SignupForm;
