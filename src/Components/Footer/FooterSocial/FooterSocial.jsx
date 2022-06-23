import React from 'react'
import './FooterSocial.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaYoutube, FaSnapchat } from 'react-icons/fa'
import FooterSocialLayout from './FooterSocialLayout'

const FooterSocial = () => {
    return (
        <div className='footer-social'>
            <div className="d-flex justify-content-center">
                <FooterSocialLayout url="//facebook.com" title="Facebook" bg="#0d47a1">
                    <FaFacebookF />
                </FooterSocialLayout>
                <FooterSocialLayout url="//facebook.com" title="Twitter" bg="#40c4ff">
                    <FaTwitter />
                </FooterSocialLayout>
                <FooterSocialLayout url="//facebook.com" title="Instagram" bg="#bd081c" clss="footer-insta">
                    <FaInstagram />
                </FooterSocialLayout>
                <FooterSocialLayout url="//facebook.com" title="Pintrest" bg="#bd081c">
                    <FaPinterest />
                </FooterSocialLayout>
                <FooterSocialLayout url="//facebook.com" title="Youtube" bg="#bd081c">
                    <FaYoutube />
                </FooterSocialLayout>
                <FooterSocialLayout url="//facebook.com" title="Spanchat" bg="#fd9c0a">
                    <FaSnapchat />
                </FooterSocialLayout>
            </div>
        </div>
    )
}

export default FooterSocial