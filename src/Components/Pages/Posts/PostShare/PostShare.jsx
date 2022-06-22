import React, { useState } from 'react'
import './PostShare.css'
import {FaHeart, FaRegHeart, FaFacebookF, FaTwitter, FaPinterest } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'


const PostShare = ({data}) => {
    const [like, setLike] = useState(false)
    const  handleLike = () => {
        setLike(like ? false : true)
    }
    return (
        <div className='post-share'>
            <span>SHARE</span>
            <div className="post-share-btn post-share-like" title='Like' style={{background:'#26c6da'}}>
                <span>{like ? 3 : 2}</span>
                {like ?
                    <FaHeart onClick={handleLike} style={{fontSize:'14px'}}/>:
                    <FaRegHeart onClick={handleLike} style={{fontSize:'14px'}}/>}
            </div>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}/${data.url.replace('/','')}`} target="_blank" className="post-share-btn post-share-hover" style={{background:'#0d47a1'}}>
                    <FaFacebookF/>
                    <div>
                        <div className="position-relative">
                            <span>Facebook</span>
                        </div>
                    </div>
            </a>
            <a href={`https://twitter.com/intent/tweet?text=Checkout this article: ${data.title} - ${window.location.origin}/${data.url.replace('/','')}`} target="_blank" className="post-share-btn post-share-hover" style={{background:'#40c4ff'}}>
                    <FaTwitter/>
                    <div>
                        <div className="position-relative">
                            <span>Twitter</span>
                        </div>
                    </div>
            </a>
            <div className="post-share-btn post-share-hover" style={{background:'#bd081c'}}>
                    <FaPinterest/>
                    <div>
                        <div className="position-relative">
                            <span>Pintrest</span>
                        </div>
                    </div>
            </div>
            <a href={`mailto:?subject=${data.title}&BODY=${window.location.origin}/${data.url.replace('/','')}`} className="post-share-btn post-share-hover" style={{background:'#0084ff'}}>
                    <MdEmail/>
                    <div>
                        <div className="position-relative">
                            <span>Email</span>
                        </div>
                    </div>
            </a>
        </div>
    )
}

export default PostShare