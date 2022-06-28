import React from 'react'
import './CategoryPosts.css'
import { Link } from 'react-router-dom'
import CategoryPostsShare from './CategoryPostsShare/CategoryPostsShare'

const CategoryPosts = ({ data }) => {
    return (
        <div className="category-posts">
            {data.map((element, index) => {
                return (
                    <div className='row' key={index}>
                        <div className="col">
                            <Link to={element.url}><img src={element.image} alt="" width="100%" /></Link>
                        </div>
                        <div className="col">
                            <div className="category-posts-cat">
                                {element.categories.filter(c => c.id !== element.category_id.parent).map((element, index) => {
                                    return (
                                        <Link to={element.url} key={index}>{element.name}</Link>
                                    )
                                })}
                            </div>
                            <h3><Link to={element.url}>{element.title}</Link></h3>
                            <div className="category-posts-cat-box">
                                <span>by <Link to="/">{element.author}</Link></span>
                                <div style={{ background: 'grey', display: 'inline-block', width: '1px', height: '11px', margin: '0 12px' }}></div>
                                <span>{element.date}</span>
                            </div>
                            <hr />
                            <p>Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla…</p>
                            <CategoryPostsShare data={element}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CategoryPosts