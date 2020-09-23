import React, {useReducer} from 'react'
import {GuestContext} from './GuestContext'
import {guestReducer} from './guestReducer'
import {TOGGLE_FILTER} from '../types'

export const GuestState = (props) => {
const initialState = {
  filterGuest: false,
  guests:[
    {
      id: 1,
      name: "Melissa Heying",
      phone: "444-555-7777",
      dietary: 'Non-Veg',
      isConfirmed: false
    },
    {
      id: 2,
      name: "Mike Heying",
      phone: "444-555-7777",
      dietary: 'Vegan',
      isConfirmed: true
    },
    {
      id: 3,
      name: "Melissa Heying",
      phone: "444-555-7777",
      dietary: 'Pescatarian',
      isConfirmed: false
    }
  ]
}

// useReducer takes 2 args guestReducer which is a function and initialState which is an object
// the function takes the state, spreads it and adds filteredGuest(toggles who's confirmed)
const [state, dispatch] = useReducer(guestReducer, initialState)

// setState using dispatch
const toggleFilter = () => {
  dispatch({
    type: TOGGLE_FILTER
  })
}

console.log(state.filterGuest)

  return (
// This is from the createContext hook; used to pass the state/props to another component
    <GuestContext.Provider
    value={{
guests: state.guests,
filterGuest: state.filterGuest,
toggleFilter
    }}>
      {props.children}
    </GuestContext.Provider>
  )
}

