import React from 'react'

const BlogPostColumn = (props) => {
  return (
    <div className='col col-4'>
        {props.children}
    </div>
  )
}

export default BlogPostColumn