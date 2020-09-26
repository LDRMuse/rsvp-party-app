import React from 'react'
import {Link} from 'react-router-dom'

export const Register = () => {
  return (
    <div className="register">
      <h1 className="title is-3">Sign Up</h1>
      <form>
        <input type="text" name="name" placeholder="Name"/>
        <input type="email" name="email" placeholder="Email"/>
        <input type="password" name="password" placeholder="Password"/>
        <input type="password" name="password" placeholder=" Re-enter Password"/>
        <input className='button is-success' type="submit" value="Sign Up"/>
      </form>

      <div className="question">
        <p>Already have an account? {" "} <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}
