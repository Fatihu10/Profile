import React, { useState } from 'react'
import './Header.css'
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='header'>
      <div className="logo">REACT CLASS</div>
      <ul className={`${isOpen ? 'toggleOpen' : 'toggleClose'}`}>
        <div onClick={handleNav} className='close'>
          <IoMdClose size={25} />
        </div>
        <li>Works</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <div onClick={handleNav} className="menu">
        <MdMenu size={25} />
      </div>
    </div>
  )
}

export default Header