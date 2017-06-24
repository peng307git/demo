import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Header from './header/header.jsx'
import App from './app/App.jsx'
import Two from './two/two.jsx'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(
    (
      <Router>
        <div>         
            <Route exact path="/" component={App}/>
            <Route path="/two" component={Two}/>
        </div>
      </Router>
    ), document.getElementById('root'));
registerServiceWorker();
