import React, { useState, useContext, useEffect } from 'react'
import { GuestContext } from '../../context'

export const GuestForm = () => {
  const { addGuest, editGuestTable, updateGuest, clearEdit } = useContext(GuestContext)

  const [guest, setGuest] = useState({
    name: '',
    phone: '',
    dietary: 'Non-Veg'
  })

  // if editGuestTable is not null, then set the guest to the user's input
  useEffect(() => {
    if (editGuestTable !== null) {
      setGuest(editGuestTable)
    } else {
      setGuest({
        name: '',
        phone: '',
        dietary: 'Non-Veg'
      })
    }
  }, [editGuestTable])


  const { name, phone, dietary } = guest

  const handleChange = (e) => {
    setGuest({
      ...guest,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    //update current guest instead of adding extra current guest
    if (editGuestTable !== null) {
      updateGuest(guest)
      clearEdit()
      // else add new guest
    } else {
      // addGuest comes from GuestState by useContext
      addGuest(guest)
      // after adding guest, reset to default below
      setGuest({
        name: '',
        phone: '',
        dietary: 'Non-Veg'
      })
    }
  }

  return (
    <div className="invite-section">
      <h1 className='title is-3'>{editGuestTable !== null ? 'Edit Guest' : 'Invite Someone'}</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Name" name="name" value={name} onChange={handleChange} />
        <input type="text" placeholder="Phone" name="phone" value={phone} onChange={handleChange} />
        <p className="options-label">Dietary</p>
        <div className="options">
          <label className="container">Non-veg
        <input type="radio" name="dietary" value='Non-Veg' checked={dietary === 'Non-Veg'} onChange={handleChange} />
            <span className="checkmark"></span>
          </label>
          <label className="container">Vegan
        <input type="radio" name="dietary" value='Vegan' checked={dietary === 'Vegan'} onChange={handleChange} />
            <span className="checkmark"></span>
          </label>
          <label className="container">Pescatarian
        <input type="radio" name="dietary" value='Pescatarian' checked={dietary === 'Pescatarian'} onChange={handleChange} />
            <span className="checkmark"></span>
          </label>
        </div><input type="submit" value={editGuestTable !== null ? 'Update Guest' : 'Add Guest'} className="btn" />
        {editGuestTable !== null ? <input onClick={clearEdit} value='Cancel' type="button" className="btn clear" /> : null}
      </form>
    </div>
  )
}
