import React, { Fragment, useContext, useEffect } from 'react'
import { AuthContext } from '../../context'
import { GuestForm, GuestCounter, GuestFilter, GuestSearch, Guests } from '../guests'


export const Home = () => {

  const { getUser } = useContext(AuthContext)

  useEffect(() => {
    getUser()
    // disables for next time (only run this effect 1x)
  }, [getUser])

  return (
    <Fragment>
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

