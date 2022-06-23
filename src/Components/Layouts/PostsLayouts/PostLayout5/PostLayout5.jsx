import React from 'react'
import './PostLayout5.css'
import { Link } from 'react-router-dom'

const PostLayout5 = ({data}) => {
  return (
    <div className="postlayout5">
        <div className="row">
            {data.map((element,index)=>{
                return (
                    <div className="col" key={index}>
                        <Link to={element.url}><img src={element.image} width="100%" alt="" /></Link>
                        <h3><Link to={element.url}>{element.title}</Link></h3>
                        <span>{element.date}</span>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default PostLayout5