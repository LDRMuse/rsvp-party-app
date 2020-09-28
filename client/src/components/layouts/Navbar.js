import React, {useContext} from 'react'
import AuthContext from '../../context/authContext/AuthContext'

export const Navbar = () => {
const { logoutUser, clearError } = useContext(AuthContext)

const onLogout = () => {
  logoutUser()
  clearError()
}


  return (
    <div className="navbar has-background-success-dark">
      <div className="logo">
        <h1><i className='fas fa-glass-cheers' />
          Party RSVP
        </h1>
        <p>Made with <span>❤</span> by LDRMuse</p>
      </div>
      <ul>
        <li>Hello, LDRMuse</li>
        <span className="sm-hide">|</span>
        <li>
          <a href="#!">
            <span className="has-text-light button has-background-link-dark" onClick={onLogout}>Logout</span>
            <i className="fas fa-sign-out-alt"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}


