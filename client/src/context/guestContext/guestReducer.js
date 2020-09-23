import {TOGGLE_FILTER} from '../types'

// reducer component to set/use state depending on type
export const guestReducer = (state, {type, payload}) => {
  switch(type) {
    case TOGGLE_FILTER:
      return{
        ...state,
        filterGuest: !state.filterGuest
      }
    default:
    return state
  }
}


//take the state and spread it, then add filterGuest;
//if there is no state in filterGuest, then it is false
//if there is state in filterGuest, then it is true
// true displays when toggle is on
