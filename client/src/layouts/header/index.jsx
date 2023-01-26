import React from 'react'
import "./index.scss"
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id='Header'>
            <div className="header">
                <div className="logo"><h1> OneSchool</h1></div>
                <ul>
                    <li> <NavLink to={"/"}> Home </NavLink> </li>
                    <li> <NavLink> Courses </NavLink> </li>
                    <li> <NavLink> Programs </NavLink> </li>
                    <li> <NavLink> Teachers </NavLink> </li>
                    <li> <NavLink to={"/add"}> Add Teacher </NavLink> </li>
                    
                </ul>
                <button className='headerBtn'> CONTACT US </button>
            </div>
    </div>
  )
}

export default Header