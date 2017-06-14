import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';

class App extends Component {
  handleClicl() {
      window.location = 'one.html';
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code onClick={this.handleClicl}>src/App.js</code> aname
        </p>
      </div>
    );
  }
}
export default App;
