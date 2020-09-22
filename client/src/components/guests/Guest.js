import React from 'react'

export const Guest = ({guest}) => {
  const {name, phone, dietary, isconfirmed} = guest
  return (
    <div className="guest-card">
      <div className="card-head">
        <div>
          <label className={`${isconfirmed && 'confirm'}`}> Confirmed
        <i className={`fas fa-check-square ${isconfirmed && 'confirm'}`}>
              <input type="checkbox" />
            </i>
          </label>
        </div>
        <div>
          <button>
            <i className="fas fa-user-edit"></i>
          </button>
          <button>
            <i className="fas fa-trash-alt remove"></i>
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
