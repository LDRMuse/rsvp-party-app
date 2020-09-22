import React, {useReducer} from 'react'
import {GuestContext} from './GuestContext'
import {guestReducer} from './guestReducer'

export const GuestState = (props) => {
const initialState = {
  guests:[
    {
      id: 1,
      name: "Melissa Heying",
      phone: 444-555-7777,
      dietary: 'Non-Veg',
      isconfirmed: false
    },
    {
      id: 2,
      name: "Mike Heying",
      phone: 444-555-7777,
      dietary: 'Vegan',
      isconfirmed: true
    },
    {
      id: 3,
      name: "Melissa Heying",
      phone: 444-555-7777,
      dietary: 'Pasccatarian',
      isconfirmed: true
    }
  ]
}
const [state, dispatch] = useReducer(guestReducer, initialState)


  return (


    <GuestContext.Provider
    value={{
guests: state.guests
    }}>
      {props.children}
    </GuestContext.Provider>
  )
}
