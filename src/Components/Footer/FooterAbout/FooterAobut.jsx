import React from 'react'
import './FooterAbout.css'
import about from '../../../Media/image/utility/about.jpg'

const FooterAobut = () => {
  return (
    <div className='footer-about'>
        <img src={about} width="100%" alt="" />
        <p>Hey! I am Krishna and I makes responsive website using modern Techonologies e.g. "React, Node, MongoDB, Express JS". The current Wep App is running on "React" JavaScript Framework</p>
    </div>
  )
}

export default FooterAobut