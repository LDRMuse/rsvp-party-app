import React, { useReducer } from 'react'
import AuthContext from './authContext'
import {authReducer} from './authReducer'



export const AuthState = (props) => {
  const initialState ={
    userAuth:null,
    errors:null
  }

const [state, dispatch] = useReducer(authReducer, initialState)






  return (
    <AuthContext.Provider value={{
      userAuth: state.userAuth,
      errors: state.errors
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}
