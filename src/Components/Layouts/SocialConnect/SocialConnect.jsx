import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaYoutube, FaSnapchat } from 'react-icons/fa'
import SocialConnectLayout from './SocialConnectLayout'

const SocialConnect = () => {

    return (
        <div className="social-connect">
            <div className="row">
                <SocialConnectLayout url="/" title="Facebook">
                    <FaFacebookF/>
                </SocialConnectLayout>
                <SocialConnectLayout url="/" title="Twitter">
                    <FaTwitter/>
                </SocialConnectLayout>
                <SocialConnectLayout url="/" title="Instagram">
                    <FaInstagram/>
                </SocialConnectLayout>
                <SocialConnectLayout url="/" title="Pintrest">
                    <FaPinterest/>
                </SocialConnectLayout>
                <SocialConnectLayout url="/" title="Youtube">
                    <FaYoutube/>
                </SocialConnectLayout>
                <SocialConnectLayout url="/" title="Snapchat">
                    <FaSnapchat/>
                </SocialConnectLayout>
            </div>
        </div>
    )
}

export default SocialConnect