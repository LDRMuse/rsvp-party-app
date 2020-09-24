import {
  TOGGLE_FILTER, SEARCH_GUEST, CLEAR_SEARCH, ADD_GUEST, DELETE_GUEST, UPDATE_GUEST
} from '../types'

// reducer component to set/use state depending on type
export const guestReducer = (state, {type, payload}) => {
  switch(type) {
    case ADD_GUEST:
      return{
        ...state,
        guests: [...state.guests, payload]
      }
       // only keep the guests who's id doesn't match the guests payload id (where the trash icon is clicked)
      case DELETE_GUEST:
        return{
          ...state,
          guests: state.guests.filter(guest => guest.id !== payload)
        }
        // update the guest where the guest.id and payload.id matches OR keep guest
        case UPDATE_GUEST:
          return{
            ...state,
            guests: state.guests.map(guest => guest.id === payload.id ? payload : guest)
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
