import React from 'react'
import './Blog.css'
import BlogCard from '../../components/BlogCard/BlogCard'
import { blogContents } from '../../utils/constant'
import Header from '../../components/header/Header'

const Blog = () => {
  return (
    <div className='blog'>
      {/* <Header /> */}
      <p className="title">Blog</p>
      <div className="blog-container">
        {blogContents.map((content, index) => (
          <BlogCard
            key={index}
            title={content.title}
            author={content.author}
            date={content.date}
            body={content.body}
          />
        ))}
      </div>
    </div>
  )
}

export default Blog