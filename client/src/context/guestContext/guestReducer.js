import {TOGGLE_FILTER, SEARCH_GUEST, CLEAR_SEARCH, ADD_GUEST} from '../types'

// reducer component to set/use state depending on type
export const guestReducer = (state, {type, payload}) => {
  switch(type) {
    case ADD_GUEST:
      return{
        ...state,
        guests: [...state.guests, payload]
      }
    case SEARCH_GUEST:
      const reg = new RegExp(`${payload}`, 'gi')
      return{
        ...state,
        search: state.guests.filter(guest => guest.name.match(reg))
      }
    case CLEAR_SEARCH:
      return{
        ...state,
        search: null
      }
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
