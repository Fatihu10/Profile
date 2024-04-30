import React, { useState } from 'react'
import './Header.css'
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='header'>
      <Link to='/'><div className="logo">REACT CLASS</div></Link>
      <ul className={`${isOpen ? 'toggleOpen' : 'toggleClose'}`}>
        <div onClick={handleNav} className='close'>
          <IoMdClose size={25} />
        </div>
        <Link to='/blog'>Blog</Link>
        <Link to='/works'>Works</Link>
        <Link to='/contact'>Contact</Link>
      </ul>
      <div onClick={handleNav} className="menu">
        <MdMenu size={25} />
      </div>
    </div>
  )
}

export default Header