import React, { useReducer } from 'react'
import axios from 'axios'

import AuthContext from './AuthContext'
import { authReducer } from './authReducer'

import {SetToken as setToken} from '../../utils'

import { SUCCESS_REGISTER, SUCCESS_LOGIN, FAIL_REGISTER, FAIL_LOGIN, SET_ERROR, CLEAR_ERROR, LOG_OUT, GET_USER, AUTH_ERROR } from '../types'

export const AuthState = (props) => {
  const initialState = {
    user: null,
    userAuth: null,
    errors: null
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  // get user
  const getUser = async () => {
    if (localStorage.token) {
      setToken(localStorage.token)
    }
    try {
      const res = await axios.get('/auth')
      dispatch({
        type: GET_USER,
        payload: res.data
      })
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: error.res.data
      })
    }
  }

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
        type: SUCCESS_REGISTER,
        payload: res.data
      })
    } catch (error) {
      dispatch({
        type: FAIL_REGISTER,
        payload: error.response.data
      })
    }
  }

  // login user using axios
  const loginUser = async (userData) => {
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    }
    //res is going to send userData and config to the /register route
    try {
      const res = await axios.post('/auth', userData, config)
      dispatch({
        type: SUCCESS_LOGIN,
        payload: res.data
      })
    } catch (error) {
      dispatch({
        type: FAIL_LOGIN,
        payload: error.response.data
      })
    }
  }

  // logout User
  const logoutUser = () => {
    dispatch({
      type: LOG_OUT
    })
  }

  const setError = (error) => {
    dispatch({
      type: SET_ERROR,
      payload: error
    })
  }
  const clearError = () => {
    dispatch({
      type: CLEAR_ERROR
    })
  }


  return (
    <AuthContext.Provider value={{
      user: state.user,
      userAuth: state.userAuth,
      errors: state.errors,
      getUser,
      registerUser,
      loginUser,
      setError,
      clearError,
      logoutUser
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}
