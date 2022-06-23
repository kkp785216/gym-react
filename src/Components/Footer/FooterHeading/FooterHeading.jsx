import React from 'react'
import './FooterHeading.css'

const FooterHeading = (props) => {
    return (
        <div className="footer-heading">
            <h3>{props.children}</h3>
        </div>
    )
}

export default FooterHeading