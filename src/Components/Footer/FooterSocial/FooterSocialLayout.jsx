import React from 'react'

const FooterSocialLayout = (props) => {
    return (
        <div className='footer-social-single'>
            <a className='d-flex align-items-center' href={props.url}>
                <div style={{background:props.bg}} className={props.clss ? props.clss:""}>
                    {props.children}
                </div>
                <div>
                    <span>{props.title}</span>
                </div>
            </a>
        </div>
    )
}

export default FooterSocialLayout