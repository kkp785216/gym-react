import React from 'react'
import './FooterCredit.css'
import { Link } from 'react-router-dom'

const FooterCredit = () => {
  return (
    <div className='footer-credit'>
        @{new Date().getFullYear()} - All Right Reserved. Designed by <em><a href="https://soledad.pencidesign.net/go-soledad/">PenciDesign</a></em> and Developed by <em><Link to="/">Krishna</Link></em>
    </div>
  )
}

export default FooterCredit