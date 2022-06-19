import React from 'react'
import { Link } from 'react-router-dom'
import './PostLayout3.css'

const PostLayout3 = (props) => {
    const {data} = props;
  return (
    <div className='pagelayout3'>
        <Link to={"/"+data.url}><img src={data.image} alt="" width="100%"/></Link>
        {<span><Link to={"/"+props.category[data.category_id].url}>{props.category[data.category_id].name}</Link></span>}
        <h3><Link to={"/"+data.url}>{data.title}</Link></h3>
        <span>{props.dt(data.date)}</span>
        <p>Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque…</p>
    </div>
  )
}

export default PostLayout3