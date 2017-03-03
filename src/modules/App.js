import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  constructor(props){
    super(props);
    document.title = "Vidi Health Coaching";
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance from route to children
      })
    }
    return (
      <div className="App">
        {children}
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"></link>
      </div>
    );
  }
}


export default App;
