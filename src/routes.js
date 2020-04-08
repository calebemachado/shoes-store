import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { isAuthenticated } from './auth'
import Home from './pages/Home'
import Cart from './pages/Cart'

const PrivateRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      isAuthenticated() ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location },
          }}
        />
      )
    }
  />
)

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/cart' component={Cart} />
    </Switch>
  )
}
