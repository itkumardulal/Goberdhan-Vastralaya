import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import ProductsSection from '../components/ProductSection'
import Cultural from '../components/Cultural'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
     <>
  <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero/>
        <About/>
        <ProductsSection/>
        <Cultural/>
        <Contact/>
      </main>
      <Footer/>
      </div>
      </>
  )
}

export default Home