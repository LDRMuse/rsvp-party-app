import React, {useContext, useEffect} from 'react'
import {GuestContext} from '../../context'
import {Guest} from './Guest'

export const Guests = () => {
  //guests was passed from GuestState with useContext hook
const {guests, filterGuest, search, getGuest} = useContext(GuestContext)

useEffect(() => {
  getGuest()
  // eslint-disable-next-line
}, [])

  return (
    <div className="guests">
    {search !== null ? search.map(guest => <Guest key={guest._id} guest={guest}/>) :
      guests.filter(guest => !filterGuest || guest.isConfirmed).map(guest => <Guest key={guest._id} guest={guest}/>)}
  </div>
  )
}

// if there is text in the search bar, then use search to show guests only
// OR
// if empty, take guests and filter each guest who is not a filterGuest (true) or if a guest is confirmed
