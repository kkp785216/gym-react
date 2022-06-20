import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { HiChevronDown } from 'react-icons/hi'
import MegaMenu from '../MegaMenu/MegaMenu'
import { fitness, weight_loss, workout, yoga, lifestyle, muscle_building } from '../../Database/SortedPosts'

const Navbar = () => {
  const obj = [
    {
      url: 'muscle-building',
      category: 'Muscle building',
      data: muscle_building
    },
    {
      url: 'weight-loss',
      category: 'Weight Loss',
      data: weight_loss
    },
    {
      url: 'workout',
      category: 'Workout',
      data: workout
    },
    {
      url: 'fitness',
      category: 'All',
      data: fitness
    },
  ]
  return (
    <nav className='on'>
      <ul className='p-0 m-0'>
        <li><Link to="/hello" className='default-hover'>HOME</Link></li>
        <li><Link to="/" className='default-hover'>FITNESS <HiChevronDown /></Link><MegaMenu menu={'Fitness'} data={null} multiData={obj} /></li>
        <li><Link to="/" className='default-hover'>WEIGHT LOSS <HiChevronDown /></Link><MegaMenu data={weight_loss} /></li>
        <li><Link to="/" className='default-hover'>WORKOUT <HiChevronDown /></Link><MegaMenu data={workout} /></li>
        <li><Link to="/" className='default-hover'>YOGA <HiChevronDown /></Link><MegaMenu data={yoga} /></li>
        <li><Link to="/" className='default-hover'>LIFESTYLE <HiChevronDown /></Link><MegaMenu data={lifestyle} /></li>
      </ul>
    </nav>
  )
}

export default Navbar