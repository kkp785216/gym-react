import React from 'react'
import './SocialConnect.css'

const SocialConnectLayout = (props) => {
    return (
        <div className="col col-6">
            <a href={props.url}>
                <div className="row">
                    <div className="col">
                        {props.children}
                    </div>
                    <div className="col pe-0">
                        <span>{props.title}</span>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default SocialConnectLayout