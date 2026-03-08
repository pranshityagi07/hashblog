import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import BlogList from '../component/BlogList'
import NewsLetter from '../component/NewsLetter'
import Footer from '../component/Footer'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <BlogList/>
        <NewsLetter/>
        <Footer/>
        
    </div>
  )
}

export default Home
