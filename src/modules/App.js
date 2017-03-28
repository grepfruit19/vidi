import React, { Component } from 'react';
import '../App.css';
// import { Link } from 'react-router';
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
    return (
      <div className="App">
        <Sidebar currentUser={this.state.currentUser}/>
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
      loggedIn: this.props.currentUser ? true : false
    }
    this.handleLogout = this.handleLogout.bind(this);
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
    let logged;
    if (this.state.loggedIn){
      logged = <p onClick={this.handleLogout}>Log Out</p>
    } else {
      logged = <p>Log In</p>
    }
    return (
      <div className="sidebar">
        <p>{this.state.currentUsername}</p>
        {logged}
        <p>Your Routines</p>
        <p> + New Routine</p>
      </div>
    )
  }
}


export default App;
