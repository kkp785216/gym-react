import React from 'react'
import BlogPostColumn from './BlogPostColumn'
import './BlogPostLayout.css'

const BlogPostRow = (props) => {
  return (
    <div className="blog-post">
        <div className="row m-0">
          {props.children}
        </div>
    </div>
  )
}

export default BlogPostRow