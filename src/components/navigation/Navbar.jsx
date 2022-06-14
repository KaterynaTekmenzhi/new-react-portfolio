import React from 'react'
import "./navbar.scss"
import { MdAccountCircle, MdEmail } from 'react-icons/md';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Genius.</a>
          <div className="itemContainer">
            <MdAccountCircle className="icon"/>
            <span>+253-682-9029</span>
          </div>
          <div className="itemContainer">
            <MdEmail className="icon"/>
            <span>kateryna.tekmenzhi@gmail.com</span>
          </div>
        </div>
        <div className="right">
        </div>
      </div>
    </div>
  )
}


