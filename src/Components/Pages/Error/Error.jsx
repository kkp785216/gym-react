import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'
import err_img from '../../../Media/image/utility/404.png'
import SearchLayout from '../../Layouts/SearchLayout/SearchLayout'

const Error = () => {
  return (
    <div className='error'>
        <h1><img src={err_img} alt="404" /></h1>
        <p>OOPS! Page you're looking for doesn't exist. Please use search for help</p>
        <SearchLayout/>
        <Link to="/">Back to Home Page</Link>
    </div>
  )
}

export default Error