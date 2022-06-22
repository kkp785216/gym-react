import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

const Error = () => {
  return (
    <div className='error'>
        <h1>404</h1>
        <div></div>
        <p></p>
        <div className="input">
            <input type="text" />
        </div>
        <Link to="/">Back to Home Page</Link>
    </div>
  )
}

export default Error