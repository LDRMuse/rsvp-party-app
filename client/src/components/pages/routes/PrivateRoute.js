import React, { useContext } from 'react'
import { AuthContext } from '../../../context/authContext/AuthContext'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { userAuth } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={props => !userAuth ? (<Redirect to='/login' />) : (<Component {...props} />)}
    />
  )
}

//this sets up a private route so that no one can get to the home page unless logged in
// and when logged out, it redirects you to the login page (/login)
