import {
  TOGGLE_FILTER, SEARCH_GUEST, CLEAR_SEARCH, ADD_GUEST, DELETE_GUEST, UPDATE_GUEST, EDIT_GUEST, GET_GUEST, GUEST_ERROR, CLEAR_EDIT
} from '../types'

// reducer component to set/use state depending on type
export const guestReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_GUEST:
      return {
        ...state,
        guests: payload
      }
    case ADD_GUEST:
      return {
        ...state,
        guests: [...state.guests, payload]
      }
    // only keep the guests who's id doesn't match the guests payload id (where the trash icon is clicked)
    case DELETE_GUEST:
      return {
        ...state,
        guests: state.guests.filter(guest => guest._id !== payload)
      }
    // update the guest where the guest.id and payload.id matches OR keep guest
    case UPDATE_GUEST:
      return {
        ...state,
        guests: state.guests.map(guest => guest._id === payload._id ? payload : guest)
      }
    // this is used update the table with the users input(payload)
    case EDIT_GUEST:
      return {
        ...state,
        editGuestTable: payload,
      }
    // this returns the table back to null
    case CLEAR_EDIT:
      return {
        ...state,
        editGuestTable: null
      }
    case SEARCH_GUEST:
      const reg = new RegExp(`${payload}`, 'gi')
      return {
        ...state,
        search: state.guests.filter(guest => guest.name.match(reg))
      }
    case GUEST_ERROR:
      return {
        ...state,
        guests: [],
        errors: payload
      }
    case CLEAR_SEARCH:
      return {
        ...state,
        search: null
      }
    //take the state and spread it, then add filterGuest;
    //if there is no state in filterGuest, then it is false
    //if there is state in filterGuest, then it is true
    // true displays when toggle is on
    case TOGGLE_FILTER:
      return {
        ...state,
        filterGuest: !state.filterGuest
      }
    default:
      return state
  }
}



