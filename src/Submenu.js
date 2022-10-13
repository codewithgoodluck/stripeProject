import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'
const Submenu = () => {
  const {isSubmenuOpen, location} = useGlobalContext()
  const container = useRef(null)
  useEffect(()=>{
    const submenue = container.current;
    const {center, bottom} = location;
    submenue.style.left = `${center}px`
    submenue.style.top = `${bottom}px`

  },[location])
  return <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container} >
    submenue

  </aside>
}

export default Submenu
