import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './app/App.jsx';
import Header from './header/header.jsx';
import Footer from './footer/index.jsx'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render((
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={ App }/>
            <Footer />
        </div>
    </Router>
    ), document.getElementById('root'));
registerServiceWorker();
