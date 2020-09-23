import React, {useContext} from 'react'
import {GuestContext} from '../../context'
import {Guest} from './Guest'

export const Guests = () => {
  //guests was passed from GuestState with useContext hook
const {guests, filterGuest} = useContext(GuestContext)


// take guests and filter each guest who is not a filterGuest (true) or if a guest is confirmed
  return (
    <div className="guests">
    {guests.filter(guest => !filterGuest || guest.isConfirmed).map(guest => <Guest key={guest.id} guest={guest}/>)}
  </div>
  )
}
