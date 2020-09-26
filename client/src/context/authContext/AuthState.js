import React, { useReducer } from 'react'
import axios from 'axios'

import AuthContext from './AuthContext'
import { authReducer } from './authReducer'

import { SUCCESS_REGISTER, SUCCESS_LOGIN, FAIL_REGISTER, FAIL_LOGIN } from '../types'

export const AuthState = (props) => {
  const initialState = {
    userAuth: null,
    errors: null
  }

  const [state, dispatch] = useReducer(authReducer, initialState)


  // register user using axios
  const registerUser = async (userData) => {
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    }
    //res is going to send userData and config to the /register route
    try {
      const res = await axios.post('/register', userData, config)
      dispatch({

      })
    } catch (error) {

    }
  }



  return (
    <AuthContext.Provider value={{
      userAuth: state.userAuth,
      errors: state.errors
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}
