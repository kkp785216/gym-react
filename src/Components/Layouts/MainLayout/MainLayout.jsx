import React from 'react'
import './MainLayout.css'

const MainiLayout = (props) => {
  return (
    <div className={`row main-row m-0 main-layout${props.className!==undefined?' '+props.className:''}`}>
      {props.children}
    </div>
  )
}

export default MainiLayout