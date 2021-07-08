import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute'
import { Login, Register, Dashboard } from '../pages'

export const Routes = () => (
  <Router>
    <Switch>
      <PrivateRoute exact path='/' Component={Dashboard} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/nova-conta' component={Register} />
      <Route exact path='/dashboard' component={Dashboard} />
    </Switch>
  </Router>
)
