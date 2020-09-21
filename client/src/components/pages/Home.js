import React, {Fragment} from 'react'
import {GuestForm, GuestCounter, GuestFilter, GuestSearch, Guests } from '../guests'

// import Guests from '../guests/Guests'

export const Home = () => {
  return (
    <Fragment>HOMEEEE
    <div className="app-container">
      <div className="main">
        <div className="filter">
          <GuestFilter />
          <GuestSearch />
        </div>
        <GuestForm />
        <GuestCounter />
      </div>
      <Guests />
    </div>
    </Fragment>
  )
}

