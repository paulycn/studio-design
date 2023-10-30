import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { BiPhoneCall } from 'react-icons/bi'
import { FiFacebook } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Logo from './Logo'

function Header() {
  return (
    <header className="flex text-lg gap-4 items-center  bg-bg-color h-20 justify-evenly w-auto">
      <div>
        <Link to="/" className="hover:no-underline">
          <Logo />
        </Link>
      </div>
      <nav className="flex gap-11 text-base">
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/about">About Us</Link>
      </nav>
      <div className="flex gap-4 justify-center">
        <a href="#" onClick={() => (window.location.href = 'tel:+37379908683')}>
          <BiPhoneCall />
        </a>
        <a href="https://www.instagram.com/mobilaloft26/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100059080966642&sk=photos" target="_blank" rel="noreferrer">
          <FiFacebook />
        </a>
      </div>
    </header>
  )
}

export default Header
