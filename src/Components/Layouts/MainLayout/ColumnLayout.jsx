import React from 'react'
import StickyBox from "react-sticky-box";

const ColumnLayout = (props) => {
  return (
    <div className={`col column-layout${props.className !== undefined ? ' ' + props.className : ''}`}>
      <StickyBox offsetTop={75} offsetBottom={15}>
        {props.children}
      </StickyBox>
    </div>
  )
}

export default ColumnLayout