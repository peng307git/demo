import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
import One from '../one';

const arr = 0;
class App extends Component {
  handleClicl() {
     console.log("app");
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
