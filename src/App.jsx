import React from 'react'
import HomePage from '../pages/HomePage/HomePage'
import Blog from '../pages/Blog/Blog'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Works from '../pages/Works/Works'
import Header from '../components/header/Header'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='blog' element={<Blog />} />
          <Route path='works' element={<Works />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App