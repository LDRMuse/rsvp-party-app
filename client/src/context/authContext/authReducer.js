import { SUCCESS_REGISTER, SUCCESS_LOGIN, FAIL_REGISTER, FAIL_LOGIN } from '../types'

export default (state, action) => {
  switch (action.type) {
    case SUCCESS_REGISTER:
    case SUCCESS_LOGIN:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        userAuth: true,
        errors: null
      }
    case FAIL_REGISTER:
    case FAIL_LOGIN:
      return {
        ...state,
        userAuth: null,
        errors: action.payload
      }
    default:
      return state
  }
}
