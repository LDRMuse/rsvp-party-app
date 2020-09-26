import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
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
    console.log({ email, password })
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
        <p>Create Account? {" "} <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}
