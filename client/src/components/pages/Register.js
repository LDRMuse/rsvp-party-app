import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/authContext/AuthContext'

export const Register = () => {
  const { registerUser, userAuth, errors } = useContext(AuthContext)

  const [user, setUser] = useState({ name: '', email: '', password: '', password2: '' })
  const { name, email, password, password2 } = user

  const handleChange = (e) => {
    e.preventDefault()
    //targeting the name="name" for all 4 values
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== password2) {
      console.log("password doesn't match")
    } else {
      registerUser({ name, email, password })
    }
  }

  return (
    <div className="register">
      <h1 className="title is-3">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
        />
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
        <input
          type="password"
          name="password2"
          placeholder=" Re-enter Password"
          value={password2}
          onChange={handleChange}
        />
        <input className='button is-success' type="submit" value="Sign Up" />
      </form>

      <div className="question">
        {/* If there are errors */}
        {errors !== null && <button className='button is-danger'>
          {/*
        - first error message below is an error were sending back w/ json
        - second error is from express-validator error.array()
        */}
          {errors.msg ? errors.msg : errors.error[0].msg}
          ...X</button>}
        <p>Already have an account? {" "} <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}
