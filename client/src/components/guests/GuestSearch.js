import React, {useContext, useRef} from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { GuestContext } from '../../context';

export const GuestSearch = () => {
  const searchValue = useRef('')



  return (
    <div>
    <input ref={searchValue} type="text" className="search" placeholder="Search Guest by name ..." />
    <button className="button is-small"><FontAwesomeIcon icon="search" className="icon"/></button>
  </div>
  )
}
