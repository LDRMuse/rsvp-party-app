import React from 'react'
import {Link} from 'react-router-dom'

export const Login = () => {
  return (
    <div className="register">
    <h1 className="title is-3">Login</h1>
    <form>

      <input type="email" name="email" placeholder="Email"/>
      <input type="password" name="password" placeholder="Password"/>

      <input type="submit" value="Sign In"/>
    </form>

    <div className="question">
      <p>Create Account? {" "} <Link to="/login">Register</Link></p>
    </div>
  </div>
  )
}
