import React from 'react'
import './Comment.css'
import { BsPersonCircle } from 'react-icons/bs'
import { FaHeart, FaRegHeart, FaFacebookF, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa'
import { RiEarthFill } from 'react-icons/ri'
import user from '../../../../Media/image/user.jpg'

const Comment = () => {
    return (
        <div className="comment-wrapper">
            <div className="row">
                <div className="col col-2 px-2">
                    <div className="c-profile">
                        <img src={user} alt="" width="100%" />
                    </div>
                </div>
                <div className="col col-10 px-2">
                    <div className="c-content">
                        <h3>Krishna Prajapati</h3>
                        <p>This is default comment posted by the developer "Krishna", this is a Kind of blog Project using "React" JavaScript Framework. If you wanna deal with this template then contact me: 8858899958 Thankyou.</p>
                        <div>
                            <RiEarthFill />
                            <FaFacebookF />
                            <FaTwitter />
                            <FaInstagram />
                            <FaPinterest />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment