import React, { useState } from 'react'
import './CategoryPostsShare.css'
import { FaHeart, FaRegHeart, FaFacebookF, FaTwitter, FaPinterest } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'


const PostShare = ({ data }) => {
    const [like, setLike] = useState(false)
    const handleLike = () => {
        setLike(like ? false : true)
    }
    return (
        <div className='category-post-share'>
            <div className="category-post-share-btn category-post-share-hover">
                {like ?
                    <FaHeart onClick={handleLike} style={{ fontSize: '14px' }} /> :
                    <FaRegHeart onClick={handleLike} style={{ fontSize: '14px' }} />}
                <div>
                    <div className="position-relative">
                        <span>{like ? 3 : 2}</span>
                    </div>
                </div>
            </div>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}/${data.url.replace('/', '')}`} target="_blank" rel="noreferrer" className="category-post-share-btn category-post-share-hover">
                <FaFacebookF />
                <div>
                    <div className="position-relative">
                        <span>Facebook</span>
                    </div>
                </div>
            </a>
            <a href={`https://twitter.com/intent/tweet?text=Checkout this article: ${data.title} - ${window.location.origin}/${data.url.replace('/', '')}`} target="_blank" rel="noreferrer" className="category-post-share-btn category-post-share-hover">
                <FaTwitter />
                <div>
                    <div className="position-relative">
                        <span>Twitter</span>
                    </div>
                </div>
            </a>
            <div className="category-post-share-btn category-post-share-hover">
                <FaPinterest />
                <div>
                    <div className="position-relative">
                        <span>Pintrest</span>
                    </div>
                </div>
            </div>
            <a href={`mailto:?subject=${data.title}&BODY=${window.location.origin}/${data.url.replace('/', '')}`} className="category-post-share-btn category-post-share-hover">
                <MdEmail />
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