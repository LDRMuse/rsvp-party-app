import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
// adding font-awesome icons is tricky
// faEdit for example, looks like fa-edit in fontawesome docs. you have to convert it to camelCase
// solid, brands, regular are collections of icons ex: "@fortawesome/free-solid-svg-icons";
library.add(fas, faEdit, faCheckSquare);

export const Guest = ({guest}) => {
  const {name, phone, dietary, isconfirmed} = guest
  return (
    <div className="guest-card">
      <div className="card-head">
        <div>
          <label className={`${isconfirmed && 'confirm'}`}> Confirmed
        <FontAwesomeIcon className={`fas fa-check-square ${isconfirmed && 'confirm'}`} icon="check-square" />
              <input type="checkbox" />
          </label>
        </div>
        <div>
          <button>
          <FontAwesomeIcon icon="edit" className="icon"/>
          </button>
          <button>
            <i className="delete"></i>
          </button>
        </div>
      </div>
      <div className="card-body">
        <h2>{name}</h2>
        <span className={(dietary === 'Non-Veg' ? "has-text-danger-light has-background-danger-dark" : dietary === 'Vegan' ? 'has-text-success-light has-background-success-dark' : 'has-text-link-light has-background-link-dark')}>{dietary}</span>
        <div className="contact">
          <i className="fas fa-phone-alt" />
          <p>{phone}</p>
        </div>
      </div>
    </div>
  )
}
