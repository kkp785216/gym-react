import React, { useRef, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Logo from '../../Media/image/logo.png'
import { Link } from 'react-router-dom'
import './Header.css'
import { IoSearch } from 'react-icons/io5'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Header = () => {
  const search = useRef();
  const handleSearch = () => {
    try { search.current.classList.toggle('on') } catch { }
  }

  useEffect(() => {
    window.onscroll = () => {
      try {
        if (window.scrollY === 0) {
          document.querySelector('header').classList.add('on');
          document.querySelector('nav').classList.add('on');
        }
        else {
          document.querySelector('header').classList.remove('on');
          document.querySelector('nav').classList.remove('on');
        }
      } catch { }
    }
  }, [])

  return (
    <>
      <header className='on'>
        <div className="header-wrapper d-flex justify-content-between position-relative">
          <div className="header-left">
            <Link to="/"><img src={Logo} alt="" /></Link>
          </div>
          <div className="header-right d-flex">
            <Navbar />
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
              </div>
              <input ref={search} className='search' type="text" placeholder='Type and hit enter' />
            </div>
          </div>
        </div>
      </header>
      <div className='header_height'></div>
    </>
  )
}

export default Header