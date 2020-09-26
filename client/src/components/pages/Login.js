import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/authContext/AuthContext'

export const Login = () => {
  const { loginUser, userAuth, errors } = useContext(AuthContext)

  const [user, setUser] = useState({ email: '', password: '' })
  //pass email and password as a value in input tag
  const { email, password } = user

  const handleChange = (e) => {
    e.preventDefault()
    //targeting the name="name" for all 4 values
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser({ email, password })
  }


  return (
    <div className="register">
      <h1 className="title is-3">Login</h1>
      <form onSubmit={handleSubmit}>
        <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
        />
        <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
        />
        <input className='button is-success' type="submit" value="Sign In" />
      </form>
      <div className="question">
        {/* If there are errors */}
        {errors !== null && <button className='button is-danger'>
          {/*
        - first error message below is an error were sending back w/ json
        - second error is from express-validator error.array()
        */}
          {errors.msg ? errors.msg : errors.error[0].msg}
          <span>X</span></button>}
        <p>Create Account? {" "} <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}
