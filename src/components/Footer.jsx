import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaViber } from 'react-icons/fa'
import { BiPhoneCall } from 'react-icons/bi'
import { FiFacebook } from 'react-icons/fi'
import Logo from './Logo'

function Footer() {
  return (
    <footer>
      <nav className="text-base flex items-center w-full justify-evenly pt-4 gap-4 flex-wrap bg-bg-color h-18 sm:h-28 border border-t-primary">
        <div className="hidden sm:flex flex-col gap-2">
          <Link to="/">Catalog</Link>
          <Link to="/">About Us</Link>
        </div>
        <div className="flex gap-1 sm:gap-5 items-center flex-col">
          <Link to="/" className="hover:no-underline">
            <Logo />
          </Link>
          <span className="text-[10px] sm:text-xs">© Loft {new Date().getFullYear()}. All rights reserved.</span>
        </div>
        <div className="hidden sm:flex flex-col items-center justify-center gap-2">
          {/* <a className="hover:no-underline">Contacte</a> */}
          <div className="flex gap-4 justify-center">
            <a href="tel:+37379908683">
              <BiPhoneCall />
            </a>
            <a href="https://www.instagram.com/mobilaloft26/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100059080966642" target="_blank" rel="noreferrer">
              <FiFacebook />
            </a>
            <a href="tel:+37379908683" rel="noreferrer">
              <FaViber />
            </a>
          </div>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
