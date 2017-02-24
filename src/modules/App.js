import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  constructor(props){
    super(props);
    document.title = "Vidi Health Coaching";
  }

  render() {
    return (
      <div className="App">
        {this.props.children}
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"></link>
      </div>
    );
  }
}


export default App;
