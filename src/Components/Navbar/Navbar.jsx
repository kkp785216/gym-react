import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { HiChevronDown } from 'react-icons/hi'
import MegaMenu from '../MegaMenu/MegaMenu'
import { fitness, weight_loss, workout, yoga, lifestyle, muscle_building } from '../../Database/SortedPosts'

const Navbar = () => {
  const obj = [
    { url: '/category/muscle-building', category: 'Muscle building', data: muscle_building },
    { url: '/category/weight-loss', category: 'Weight Loss', data: weight_loss },
    { url: '/category/workout', category: 'Workout', data: workout },
    { url: '/category/fitness', category: 'All', data: fitness },
  ]
  return (
    <nav className='on'>
      <ul className='p-0 m-0'>
        <li><Link to="/" className='default-hover'>HOME</Link></li>
        <li><Link to="/category/fitness" className='default-hover'>FITNESS <HiChevronDown /></Link><MegaMenu menu={'Fitness'} data={null} multiData={obj} /></li>
        <li><Link to="/category/weight-loss" className='default-hover'>WEIGHT LOSS <HiChevronDown /></Link><MegaMenu data={weight_loss} /></li>
        <li><Link to="/category/workout" className='default-hover'>WORKOUT <HiChevronDown /></Link><MegaMenu data={workout} /></li>
        <li><Link to="/category/yoga" className='default-hover'>YOGA <HiChevronDown /></Link><MegaMenu data={yoga} /></li>
        <li><Link to="/category/lifestyle" className='default-hover'>LIFESTYLE <HiChevronDown /></Link><MegaMenu data={lifestyle} /></li>
      </ul>
    </nav>
  )
}

export default Navbar