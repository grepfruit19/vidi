import React, { Component } from 'react';
import '../App.css';
import {
  Button
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
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        currentUser: this.state.currentUser,
      })
    }
    let currentUsername = this.state.currentUser ? this.state.currentUser.getUsername() : 'Not logged in';
    return (
      <div className="App">
        {currentUsername}
        <Button onClick={this.handleLogout} bsStyle="primary">Log Out</Button>
        {children}
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"></link>
      </div>
    );
  }
}


export default App;
