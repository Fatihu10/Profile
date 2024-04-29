import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='text-section'>
        <h2>Hi, I am John, <br /><span>Creative Technologist</span></h2>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <button>Download Resume</button>
      </div>
      <div className='image-section'>
        <img src="/images/profile.png" alt="" />
      </div>
    </div>
  )
}

export default Hero