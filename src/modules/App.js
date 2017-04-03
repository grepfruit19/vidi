import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router';
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
        <Header currentUser={this.state.currentUser}/>
        <div className="children">
          {children}
        </div>
      </div>
    );
  }
}

class Header extends Component {
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
      logged = <div onClick={this.handleLogout}>Log Out</div>
    } else {
      logged = <div>Log In</div>
    }
    return (
      <div className="header">
        <Link to="/home"><div><h2>Vidi Health Coaching</h2></div></Link>
        <div>{this.state.currentUsername}</div>
        {logged}
      </div>
    )
  }
}


export default App;
