import React from 'react'

export const GuestFilter = () => {
  return (
    <div className="toggle">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      <p className="lead">Show attending only!</p>
    </div>
  )
}
