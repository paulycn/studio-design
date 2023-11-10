import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { BiPhoneCall } from 'react-icons/bi'
import { FiFacebook } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import Sidebar from './SIdebar'

function Header() {
  return (
    <header id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}></Sidebar>
      <div id="page-wrap"></div>
      <div className="z-10 fixed w-full flex text-lg gap-4 items-center justify-center bg-header-col sm:h-20 h-10 sm:justify-evenly sm:w-auto sm:relative ">
        <div>
          <Link to="/" className="hover:no-underline">
            <Logo />
          </Link>
        </div>
        <nav className="hidden sm:flex gap-11 text-base ">
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/about">Despre noi</Link>
        </nav>
        <div className="hidden sm:flex gap-4 justify-center">
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
      </div>
    </header>
  )
}

export default Header
