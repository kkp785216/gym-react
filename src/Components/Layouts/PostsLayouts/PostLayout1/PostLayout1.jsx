import React from 'react'
import { Link } from 'react-router-dom'
import './PostLayout1.css'

const PostLayout1 = (props) => {
    return (
        <div className={`pagelayout1 ${props.className}`}>
            <div className="row">
                {props.data.slice(0, 8).map((element, index) => {
                    return (
                        <div className="col col-6" key={index}>
                            <div className="row">
                                <div className="col">
                                    <h3><Link to={element.url} className='default-hover'>
                                        <img src={element.image} alt="" />
                                        {element.title}
                                    </Link></h3>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PostLayout1