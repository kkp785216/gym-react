import React from 'react'
import './PostImage.css'
import { Link } from 'react-router-dom';

const PostImage = ({ data }) => {

    return (
        <div>
            <div className="post-image-wrapper">
                <div className="post-image">
                    <img src={data.big_img} width="100%" alt="" />
                    <div className="post-image-content">
                        <span><Link to={data.category_id.url}>{data.category_id.name}</Link></span>
                        <h3>{data.title}</h3>
                        <span>by {data.author.replace(data.author[0], data.author[0].toUpperCase())} | </span>
                        <span>{data.date} | </span>
                        <span>0 comment</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostImage