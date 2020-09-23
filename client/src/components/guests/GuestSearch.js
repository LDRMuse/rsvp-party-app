import React, {useContext, useRef} from 'react'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { GuestContext } from '../../context';

export const GuestSearch = () => {
  const { searchGuest, clearSearch } = useContext(GuestContext)
  const searchValue = useRef('')

  // if the searchValue is not equal to an empty string, then run the searchGuest function
  // else run the clearSearch function
const handleChange = (e) => {
  if (searchValue.current.value !== '') {
    searchGuest(e.target.value)
  } else {
clearSearch()
  }
}

  return (
    <div>
    <input ref={searchValue} type="text" onChange={handleChange} className="search" placeholder="Search Guest by name ..." />
    <button className="button is-small"><FontAwesomeIcon icon="search" className="icon"/></button>
  </div>
  )
}
