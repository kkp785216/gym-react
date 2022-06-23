import React from 'react'
import './PostLayout4.css'
import { Link } from 'react-router-dom'

const PostLayout4 = ({ data }) => {
    return (
        <div className="row postlayout4">
            {data.slice(0, 9).map((element, index) => {
                return (
                    <div className="col col-4" key={index}>
                        <Link to={element.url}><img src={element.image} alt="" /></Link>
                        <h3><Link to={element.url}>{element.title}</Link></h3>
                        <span>{element.date}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default PostLayout4