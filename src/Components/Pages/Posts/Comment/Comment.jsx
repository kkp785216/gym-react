import React from 'react'
import './Comment.css'
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa'
import { RiEarthFill } from 'react-icons/ri'
import user from '../../../../Media/image/user.jpg'

const Comment = ({ data }) => {
    return (
        <div className="comment-wrapper">
            {data.data && data.data.length >= 1 && data.data.slice(0,3).map((element, index) => {
                return (
                    <div className="row" key={index}>
                        <div className="col col-2 px-2" key={index}>
                            <div className="c-profile">
                                <img src={user} alt="" width="100%" />
                            </div>
                        </div>
                        <div className="col col-10 px-2">
                            <div className="c-content">
                                <h3>{element.name}</h3>
                                <p>{element.message}</p>
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
                )
            })}
        </div>
    )
}

export default Comment