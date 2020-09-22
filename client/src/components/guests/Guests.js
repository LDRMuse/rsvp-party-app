import React, {useContext} from 'react'
import {GuestContext} from '../../context'
import {Guest} from './Guest'

export const Guests = () => {
  //guests was passed from GuestState with useContext hook
const {guests} = useContext(GuestContext)



  return (
    <div className="guests">
    {guests.map(guest => <Guest key={guest.id} guest={guest}/>)}
  </div>
  )
}
