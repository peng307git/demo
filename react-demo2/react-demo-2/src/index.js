import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    (
        <Router>
            <Route path="/" component={App}>
            </Route>
        </Router>
    ), document.getElementById('root'));
registerServiceWorker();
