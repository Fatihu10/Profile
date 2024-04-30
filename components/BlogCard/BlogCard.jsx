import React from 'react'
import './BlogCard.css'

const BlogCard = ({title, body, author, date}) => {
  return (
    <div className='blog-card'>
      <div className='title'>
        <p>{title}</p>
      </div>
      <div className='date'>
        <p>{date}</p> |
        <p className='express'>{author}</p>
      </div>
      <div className='blog-body'>
        <p>{body}</p>
      </div>
    </div>
  )
}

export default BlogCard