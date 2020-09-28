import React from 'react'

export const Navbar = () => {
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
            <span className="sm-hide has-text-light has-background-link-dark">Logout</span>
            <i className="fas fa-sign-out-alt"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}


