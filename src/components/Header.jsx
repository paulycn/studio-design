import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { BiPhoneCall } from 'react-icons/bi'
import { FiFacebook } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="flex text-lg gap-4 items-center justify-center bg-bg-color h-20">
      <nav className="flex gap-11 text-base">
        <Link to="/">Home</Link>
        <Link to="/">Products</Link>
        <Link to="/">About Us</Link>
      </nav>
      {/* <div className="flex gap-1">
        <button>EN</button>
    </div> */}
      <div className="flex gap-4 absolute justify-center right-72">
        <a href="#" onClick={() => (window.location.href = 'tel:+37379908683')}>
          <BiPhoneCall />
        </a>
        <a href="https://www.instagram.com/mobilaloft26/">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100059080966642&sk=photos">
          <FiFacebook />
        </a>
      </div>
    </header>
  )
}

export default Header
