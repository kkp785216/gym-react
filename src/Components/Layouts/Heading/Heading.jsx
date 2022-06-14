import React from 'react'
import './Heading.css'

const Heading = (props) => {
  const mystyle ={
    primary: {
      backgroundColor:'var(--primary-color)',
      color:'white'
    },
    secondary: {
      backgroundColor:'var(--secondary-color)',
      color:'white'
    }
  }
  return (
    <h3 className='heading' style={props.color ? mystyle[props.color]:{}}>
      {props.children}
    </h3>
  )
}

export default Heading