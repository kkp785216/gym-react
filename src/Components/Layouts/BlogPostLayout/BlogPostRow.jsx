import React from 'react'
import './BlogPostLayout.css'

const BlogPostRow = (props) => {
  return (
    <div className="blog-post">
        <div className="row">
          {props.children}
        </div>
    </div>
  )
}

export default BlogPostRow