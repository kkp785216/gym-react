import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaYoutube, FaSnapchat } from 'react-icons/fa'
import SocialConnectLayout from './SocialConnectLayout'

const SocialConnect = () => {

    return (
        <div className="social-connect">
            <div className="row">
                <SocialConnectLayout url="//facebook.com" title="Facebook">
                    <FaFacebookF/>
                </SocialConnectLayout>
                <SocialConnectLayout url="//twitter.com" title="Twitter">
                    <FaTwitter/>
                </SocialConnectLayout>
                <SocialConnectLayout url="//instagram.com" title="Instagram">
                    <FaInstagram/>
                </SocialConnectLayout>
                <SocialConnectLayout url="//pintrest.com" title="Pintrest">
                    <FaPinterest/>
                </SocialConnectLayout>
                <SocialConnectLayout url="//youtube.com" title="Youtube">
                    <FaYoutube/>
                </SocialConnectLayout>
                <SocialConnectLayout url="//spanchat.com" title="Snapchat">
                    <FaSnapchat/>
                </SocialConnectLayout>
            </div>
        </div>
    )
}

export default SocialConnect