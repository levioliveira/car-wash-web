import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { CarwashContext } from '../context'

export const PrivateRoute = ({ Component, ...rest }) => {
  const {
    loginState: { isLogged },
  } = useContext(CarwashContext)
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  )
}
