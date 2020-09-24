import React, { useContext } from 'react'
import { GuestContext } from '../../context'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// adding font-awesome icons is tricky
// faEdit for example, looks like fa-edit in fontawesome docs. you have to convert it to camelCase
// solid, brands, regular are collections of icons ex: "@fortawesome/free-solid-svg-icons";
library.add(fas, faEdit, faCheckSquare, faTrash, faPhone);


export const Guest = ({ guest }) => {

  const { deleteGuest, updateGuest, editGuest } = useContext(GuestContext);

  const handleRemove = () => {
    deleteGuest(id)
  }

  // take a copy of guest (...)
  // create new object that gets triggered onChange when the checkbox is clicked
  const handleIsConfirmed = () => {
updateGuest({...guest, isConfirmed: !isConfirmed})
  }

  // puts the new values of the guest in the guest table (guestForm)
  const handleEdit = () => {
    editGuest(guest)
  }

  const { name, phone, dietary, isConfirmed, id } = guest
  return (
    <div className="guest-card">
      <div className="card-head">
        <div>
          <label className={`${isConfirmed && 'confirm'}`}> Confirmed
        <FontAwesomeIcon className={`fas fa-check-square ${isConfirmed && 'confirm'}`} icon="check-square" />
            <input type="checkbox" onChange={handleIsConfirmed} />
          </label>
        </div>
        <div>
          <button className="button mr-4 pl-4 pr-4" onClick={handleEdit}>
            <FontAwesomeIcon icon="edit" className="icon" />
          </button>
          <button className="button mr-4 pl-4 pr-4" onClick={handleRemove}>
            <FontAwesomeIcon icon="trash" className="icon" />
          </button>
        </div>
      </div>
      <div className="card-body">
        <h2>{name}</h2>
        <span className={(dietary === 'Non-Veg' ? "has-text-danger-light has-background-danger-dark" : dietary === 'Vegan' ? 'has-text-success-light has-background-success-dark' : 'has-text-link-light has-background-link-dark')}>{dietary}</span>
        <div className="contact">
          <FontAwesomeIcon icon="phone" className="icon" />
          <i className="fas fa-phone" />
          <p>{phone}</p>
        </div>
      </div>
    </div>
  )
}
