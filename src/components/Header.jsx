import React, { useState } from 'react'
import { FaInstagram } from 'react-icons/fa'
import { BiPhoneCall } from 'react-icons/bi'
import { FiFacebook } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import Sidebar from './SIdebar'

function Header() {
  const [activeLink, setActiveLink] = useState(null)

  const handleClick = (link) => {
    setActiveLink(link)
  }
  return (
    <header id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}></Sidebar>
      <div id="page-wrap"></div>
      <div className="z-10 fixed w-full flex text-lg gap-4 items-center justify-center bg-header-col sm:h-20 h-10 sm:justify-evenly sm:w-auto sm:relative ">
        <div>
          <Link to="/" onClick={() => handleClick('home')} className="hover:no-underline">
            <Logo />
          </Link>
        </div>
        <nav className="hidden sm:flex gap-11 text-base ">
          <Link to="/" onClick={() => handleClick('home')} className={activeLink === 'home' ? 'active-link' : 'disabled-link'}>
            Home
          </Link>
          <Link to="/catalog" onClick={() => handleClick('catalog')} className={activeLink === 'catalog' ? 'active-link' : 'disabled-link'}>
            Catalog
          </Link>
          <Link to="/about" onClick={() => handleClick('about')} className={activeLink === 'about' ? 'active-link' : 'disabled-link'}>
            Despre noi
          </Link>
        </nav>
        <div className="hidden sm:flex gap-4 justify-center">
          <a href="https://www.instagram.com/mobilaloft26/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100059080966642" target="_blank" rel="noreferrer">
            <FiFacebook />
          </a>
          <a href="#" className="flex gap-4" onClick={() => (window.location.href = 'tel:+37379908683')}>
            <BiPhoneCall />
            <span className="text-sm hidden hover:inline">079908683</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
