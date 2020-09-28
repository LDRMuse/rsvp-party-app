import { SUCCESS_REGISTER, SUCCESS_LOGIN, FAIL_REGISTER, FAIL_LOGIN, SET_ERROR, CLEAR_ERROR, LOG_OUT, GET_USER, AUTH_ERROR } from '../types'

export const authReducer = (state, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        userAuth: true,
        errors: null
      }
    case SUCCESS_REGISTER:
    case SUCCESS_LOGIN:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        userAuth: true,
        errors: null
      }
    case SET_ERROR:
      return {
        ...state,
        errors: action.payload
      }
    case CLEAR_ERROR:
      return {
        ...state,
        errors: null
      }
    case FAIL_REGISTER:
    case FAIL_LOGIN:
    case AUTH_ERROR:
    case LOG_OUT:
      localStorage.removeItem('token')
      return {
        ...state,
        userAuth: null,
        user: null,
        errors: action.payload
      }
    default:
      return state
  }
}
