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
        {nav}

        {children}
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"></link>
      </div>
    );
  }
}


export default App;
