import React, { useState, useContext } from 'react'
import { GuestContext } from '../../context'

export const GuestForm = () => {
  const { addGuest } = useContext(GuestContext)


  const [guest, setGuest] = useState({
    name: '',
    phone: '',
    dietary: 'Non-Veg'
  })

  const { name, phone, dietary } = guest

  const handleChange = (e) => {
    setGuest({
      ...guest,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // addGuest comes from GuestState by useContext
    addGuest(guest)
    // after adding guest, reset to default below
    setGuest({
      name: '',
      phone: '',
      dietary: 'Non-Veg'
    })
  }

  return (
    <div className="invite-section">
      <h1>Invite Someone</h1>
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
        <input type="radio" name="dietary" value='Vegan' onChange={handleChange} />
            <span className="checkmark"></span>
          </label>
          <label className="container">Pascatarian
        <input type="radio" name="dietary" value='Pesacatarian' onChange={handleChange} />
            <span className="checkmark"></span>
          </label>
        </div>
        <input type="submit" value="Add Guest" className="btn" />
      </form>
    </div>
  )
}
