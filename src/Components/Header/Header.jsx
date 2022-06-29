import React, { useRef, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Logo from '../../Media/image/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import { IoSearch, IoClose } from 'react-icons/io5'
import { FiMenu } from 'react-icons/fi'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useState } from 'react'
import MobileNavbar from '../Navbar/MobileNavbar/MobileNavbar'

const Header = () => {
  const search = useRef();
  const handleSearch = () => {
    try { search.current.classList.toggle('on') } catch { }
    try { document.querySelector('.searchbtn> :last-child').classList.toggle('on') } catch { }
  }
  
  const handleHamburger = () => {
    try {
      document.querySelector('.mobile-nav-wrapper').classList.toggle('on')
      document.querySelector('.nav-overlay').classList.toggle('on')
  } catch { }
  }

  useEffect(() => {
    window.onscroll = () => {
      try {
        if (window.scrollY === 0) {
          document.querySelector('header').classList.add('on');
          document.querySelector('nav.pc-navbar').classList.add('on');
        }
        else {
          document.querySelector('header').classList.remove('on');
          document.querySelector('nav.pc-navbar').classList.remove('on');
        }
      } catch { }
    }
  }, [])

  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search?q=${searchText}`);
    try { search.current.classList.toggle('on') } catch { }
  }

  return (
    <>
      <header className='on'>
        <div className="header-wrapper d-flex justify-content-between position-relative">
          <div className="hamburger">
            <FiMenu onClick={handleHamburger}/>
          </div>
          <div className="header-left">
            <Link to="/"><img src={Logo} alt="" /></Link>
          </div>
          <div className="header-right d-flex">
            <Navbar />
            <MobileNavbar handleHamburger={handleHamburger}/>
            <div className="nav-social">
              <FaFacebookF className='default-hover' />
              <FaTwitter className='default-hover' />
              <FaInstagram className='default-hover' />
              <FaPinterest className='default-hover' />
              <FaYoutube className='default-hover' />
              <MdEmail className='default-hover' />
            </div>
            <div className="nav-search">
              <div className="searchbtn" onClick={handleSearch}>
                <IoSearch />
                <IoClose />
              </div>
              <form onSubmit={handleSubmit}><input ref={search} className='search' value={searchText} onChange={(e) => { setSearchText(e.target.value) }} type="text" placeholder='Type and hit enter' autoFocus /></form>
            </div>
          </div>
        </div>
      </header>
      <div className='header_height'></div>
    </>
  )
}

export default Header