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
      isconfirmed: false
    },
    {
      id: 2,
      name: "Mike Heying",
      phone: "444-555-7777",
      dietary: 'Vegan',
      isconfirmed: true
    },
    {
      id: 3,
      name: "Melissa Heying",
      phone: "444-555-7777",
      dietary: 'Pescatarian',
      isconfirmed: false
    }
  ]
}
const [state, dispatch] = useReducer(guestReducer, initialState)

// setState using dispatch
const toggleFilter = () => {
  dispatch({
    type: TOGGLE_FILTER
  })
}


  return (

// This is from the createContext hook
//Use this component to pass the state/props
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

