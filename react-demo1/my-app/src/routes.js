import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import Index from './js/App'
import One from './js/one'
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()
const routes = (
  <HashRouter history={customHistory} >
    <div>
      <Route path="/" component={Index} />
      <Route path="/one" component={One} />
    </div>
  </HashRouter>
)