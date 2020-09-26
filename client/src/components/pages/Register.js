import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
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
      console.log("password doesnt match")
    } else {
      console.log({name, email, password})
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
        <p>Already have an account? {" "} <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}
