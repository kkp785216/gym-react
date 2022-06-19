import React from 'react'
import { Link } from 'react-router-dom'
import './PostLayout2.css'

const PostLayout2 = (props) => {
    return (
        <div className={`pagelayout2 ${props.className}`}>
            <div className="row">
                {props.data.slice(0, 8).map((element, index) => {
                    return (
                        <div className="col col-12" key={index}>
                            <div className="row">
                                <div className="col">
                                    <Link to={"/"+element.url}><img src={element.image} alt="" /></Link>
                                </div>
                                <div className="col">
                                    <h3><Link to={"/"+element.url} className='default-hover'>{element.title}</Link></h3>
                                    {props.date && <span>{element.date}</span>}
                                </div>
                            </div>
                            {props.hr && <hr className='mb-0'/>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PostLayout2