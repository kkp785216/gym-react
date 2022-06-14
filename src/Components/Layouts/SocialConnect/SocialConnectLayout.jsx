import React from 'react'
import { Link } from 'react-router-dom'
import './SocialConnect.css'

const SocialConnectLayout = (props) => {
    return (
        <div className="col col-6">
            <Link to={props.url}>
                <div className="row">
                    <div className="col">
                        {props.children}
                    </div>
                    <div className="col pe-0">
                        <span>{props.title}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SocialConnectLayout