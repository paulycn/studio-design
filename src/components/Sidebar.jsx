import React, { useState } from 'react'
import { stack as Menu } from 'react-burger-menu'
import { FaInstagram } from 'react-icons/fa'
import { BiPhoneCall } from 'react-icons/bi'
import { FiFacebook } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import '../css/burger.css'

function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleStateChange = (state) => {
    setIsMenuOpen(state.isOpen)
  }

  return (
    <div>
      <Menu right isOpen={isMenuOpen} onStateChange={handleStateChange}>
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <Link to="/" className="menu-item" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Home
        </Link>
        <Link to="/catalog" className="menu-item" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Catalog
        </Link>
        <Link to="/about" className="menu-item" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Despre noi
        </Link>
        <a href="#" onClick={() => (window.location.href = 'tel:+37379908683')}>
          <BiPhoneCall />
        </a>
        <a href="https://www.instagram.com/mobilaloft26/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100059080966642" target="_blank" rel="noreferrer">
          <FiFacebook />
        </a>
      </Menu>
    </div>
  )
}

export default Sidebar
