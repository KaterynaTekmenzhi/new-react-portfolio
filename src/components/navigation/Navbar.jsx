import React from 'react'
import "./navbar.scss"
import { MdAccountCircle, MdEmail } from 'react-icons/md';

export default function Navbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
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
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}


