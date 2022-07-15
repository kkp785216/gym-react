import React, { useEffect } from 'react'
import './MobileNavbar.css'

const MobileNavbar = (props) => {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.mobile-nav-logo').innerHTML = document.querySelector('.header-left a').outerHTML;
            document.querySelector('.mobile-nav-social').innerHTML = document.querySelector('.nav-social').innerHTML;
            // Mobile Navbar
            document.querySelector('.mobile-navbar').innerHTML = "";
            Array.from(document.querySelectorAll('.pc-navbar >ul >li> a')).forEach(element => {
                let div = document.createElement('ul')
                div.innerHTML = "<li></li>"
                div.querySelector('li').innerHTML = element.outerHTML
                let underdiv = element.parentElement.querySelector('ul.text-start')
                if (underdiv !== null) {
                    div.querySelector('li').innerHTML += underdiv.outerHTML
                }
                let reactHtml = div.innerHTML
                document.querySelector('.mobile-navbar').innerHTML += reactHtml;
            })
        }, 0);
    }, []);

    return (
        <>
            <nav className="mobile-nav-wrapper">
                <div className="mobile-nav-logo"></div>
                <div className="mobile-nav-social"></div>
                <div className="mobile-navbar-wrapper"><ul className='mobile-navbar'></ul></div>
            </nav>
            <div className="nav-overlay" onClick={props.handleHamburger}></div>
        </>
    )
}

export default MobileNavbar