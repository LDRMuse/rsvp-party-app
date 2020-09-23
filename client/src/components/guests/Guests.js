import React, {useContext} from 'react'
import {GuestContext} from '../../context'
import {Guest} from './Guest'

export const Guests = () => {
  //guests was passed from GuestState with useContext hook
const {guests, filterGuest, search} = useContext(GuestContext)


  return (
    <div className="guests">
    { search !== null ? search.map(guest => <Guest key={guest.id} guest={guest}/>) :
      guests.filter(guest => !filterGuest || guest.isConfirmed).map(guest => <Guest key={guest.id} guest={guest}/>)}
  </div>
  )
}

// if there is text in the search bar, then use search to show guests only
// OR
// if empty, take guests and filter each guest who is not a filterGuest (true) or if a guest is confirmed
