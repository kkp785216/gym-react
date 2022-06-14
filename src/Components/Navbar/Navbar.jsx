import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { HiChevronDown } from 'react-icons/hi'
import MegaMenu from '../MegaMenu/MegaMenu'
import {fitness, weight_loss, workout, yoga, lifestyle, muscle_building} from './NavbarData'

const Navbar = () => {
  return (
    <nav className='on'>
      <ul className='p-0 m-0'>
        <li><Link to="/" className='default-hover'>HOME</Link></li>
        <li><Link to="/" className='default-hover'>FITNESS <HiChevronDown /></Link><MegaMenu menu={'Fitness'} data={null} multiData={[muscle_building, weight_loss, workout, fitness]} /></li>
        <li><Link to="/" className='default-hover'>WEIGHT LOSS <HiChevronDown /></Link><MegaMenu data={weight_loss} /></li>
        <li><Link to="/" className='default-hover'>WORKOUT <HiChevronDown /></Link><MegaMenu data={workout} /></li>
        <li><Link to="/" className='default-hover'>YOGA <HiChevronDown /></Link><MegaMenu data={yoga} /></li>
        <li><Link to="/" className='default-hover'>LIFESTYLE <HiChevronDown /></Link><MegaMenu data={lifestyle} /></li>
      </ul>
    </nav>
  )
}

export default Navbar