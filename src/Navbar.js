import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { openSidebar, openSubmenue, closeSubmenue } = useGlobalContext()
  const displaySubmenu = (e)=>{
    // trying to get the location oof the text when I hover on the links
    const page = e.target.textContext;
    const tempBtn=e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom -3;
    openSubmenue(page, {center,bottom})
  }
  
  return <nav className='nav'>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className='nav-logo' alt="stripw" />
        <button className='btn toggle-btn' onClick={openSidebar}>
        <FaBars></FaBars>
        </button>

      </div>
      <ul className='nav-links'>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>products</button>

        </li>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>developer</button>

        </li>
        <li>   <button className='link-btn' onMouseOver={displaySubmenu}>company</button></li>
       
      </ul>
      <button className='btn signin-btn'>Sign In</button>

    </div>

  </nav>
}

export default Navbar
