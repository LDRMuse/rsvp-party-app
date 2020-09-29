import React, { useReducer } from 'react'
import axios from 'axios'
import { GuestContext } from './GuestContext'
import { guestReducer } from './guestReducer'
import {
  TOGGLE_FILTER, SEARCH_GUEST, CLEAR_SEARCH, ADD_GUEST, DELETE_GUEST, UPDATE_GUEST, EDIT_GUEST, GET_GUEST, GUEST_ERROR, CLEAR_EDIT
} from '../types'


export const GuestState = (props) => {
  const initialState = {
    filterGuest: false,
    search: null,
    editGuestTable: null,
    guests: [],
    errors: null
  }

  // useReducer takes 2 args guestReducer which is a function and initialState which is an object
  // the function takes the state, spreads it and adds filteredGuest(toggles who's confirmed)
  const [state, dispatch] = useReducer(guestReducer, initialState)


  //get guests from axios
  const getGuest = async () => {
    try {
      const res = await axios.get('/guests')
      dispatch({
        type: GET_GUEST,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: GUEST_ERROR,
        payload: err.response.msg
      })
    }
  }

  const addGuest = async (guest) => {
    const config = {
      "Content-Type": "application/json"
    }
    try {
      const res = await axios.post('/guests', guest, config)
      dispatch({
        type: ADD_GUEST,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: GUEST_ERROR,
        payload: err.response.msg
      })
    }
  }

  const deleteGuest = (id) => {
    dispatch({
      type: DELETE_GUEST,
      payload: id
    })
  }

  // for isConfirmed
  const updateGuest = (guest) => {
    dispatch({
      type: UPDATE_GUEST,
      payload: guest
    })
  }

  // toggle on/off (starting at false) using guestReducer
  const toggleFilter = () => {
    dispatch({
      type: TOGGLE_FILTER
    })
  }
  const searchGuest = (guest) => {
    dispatch({
      type: SEARCH_GUEST,
      payload: guest
    })
  }
  const clearSearch = () => {
    dispatch({
      type: CLEAR_SEARCH
    })
  }

  const editGuest = (guest) => {
    dispatch({
      type: EDIT_GUEST,
      payload: guest
    })
  }

  const clearEdit = () => {
    dispatch({
      type: CLEAR_EDIT
    })
  }

  return (
    // This is from the createContext hook; used to pass the state/props to any component;
    //just import {GuestContext} in any component to use

    <GuestContext.Provider
      value={{
        guests: state.guests,
        filterGuest: state.filterGuest,
        search: state.search,
        editGuestTable: state.editGuestTable,
        getGuest,
        addGuest,
        updateGuest,
        deleteGuest,
        editGuest,
        clearEdit,
        toggleFilter,
        searchGuest,
        clearSearch
      }}>
      {props.children}
    </GuestContext.Provider>
  )
}

