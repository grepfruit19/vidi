import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router';
import {
  Nav, NavItem
} from 'react-bootstrap';
import Parse from 'parse';

class App extends Component {
  constructor(props){
    super(props);
    document.title = "Vidi Health Coaching";
    Parse.initialize('appid');
    Parse.serverURL = 'https://sentience.herokuapp.com/parse';
    this.state = {
      currentUser: Parse.User.current(),
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.refreshState = this.refreshState.bind(this);
  }

  refreshState(){
    this.setState(this.state);
  }

  handleLogout(){
    Parse.User.logOut().then(() =>
      this.setState({
        currentUser: Parse.User.current()
      })
    );
    this.props.route.history.push("/login");
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        currentUser: this.state.currentUser,
      })
    }
    let currentUsername = this.state.currentUser ? this.state.currentUser.getUsername() : 'Not logged in';
    let nav;
    if (this.state.currentUser){
      nav = (
        <Nav bsStyle="pills">
          <NavItem>{currentUsername}</NavItem>
          <NavItem onClick={this.handleLogout}>Log Out</NavItem>
        </Nav>
      )
    } else {
        nav = (
          <Nav bsStyle="pills">
            <NavItem><Link to="/login">{currentUsername}</Link></NavItem>
          </Nav>
        )
    }
    return (
      <div className="App">
        <Sidebar user={this.state.currentUser}/>
        {nav}

        {children}

      </div>
    );
  }
}

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUsername: this.props.currentUser ? this.props.currentUser.getUsername() : 'Not logged in',
      nav: null,
    }
    if (this.props.currentUser){
      this.state.nav = (
        <div>
          <p>{this.state.currentUsername}</p>
          <p>Log Out</p>
        </div>
      )
    } else {
      this.state.nav = (
        <div>
          <p>{this.state.currentUsername}</p>
          <p>Log In</p>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="sidebar">
        <p>{this.state.nav}</p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    )
  }
}


export default App;
