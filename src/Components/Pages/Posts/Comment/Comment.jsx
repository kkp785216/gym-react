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
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae. Nemo enim ipsam voluptatem.</p>
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