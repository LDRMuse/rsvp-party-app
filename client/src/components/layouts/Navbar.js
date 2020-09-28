import React, { useContext, Fragment } from 'react'
import AuthContext from '../../context/authContext/AuthContext'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const { logoutUser, clearError, userAuth, user } = useContext(AuthContext)

  const onLogout = () => {
    logoutUser()
    clearError()
  }

      //TODO: Fix bug, user cannot log out when clicking button;
  const authLinks = (
    <Fragment>
      <li className='box mr-3'>Hello, {user && user.name}</li>
      <li>
        <Link to='/login' className="mb-3 mt-3 has-text-light button has-background-link-dark" onClick={onLogout}>Logout</Link>
      </li>
    </Fragment>
  )

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register' className='box mr-3'>Register</Link>
      </li>
      <li>
        <Link to='/login' className="mb-3 mt-3 has-text-light button has-background-link-dark">Login</Link>
      </li>
    </Fragment>
  )

  return (
    <div className="navbar has-background-success-dark">
      <div className="logo">
        <h1><i className='fas fa-glass-cheers' />
          Party RSVP
        </h1>
        <p>Made with <span>❤</span> by LDRMuse</p>
      </div>
      <ul>
        {userAuth ? authLinks : guestLinks}
      </ul>
    </div>
  )
}


