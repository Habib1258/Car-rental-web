import React from 'react'
import Navbar from './component/navbar'
import Hero from './component/hero'
import Offer from './component/offer'
import Types from './component/types'
import Whyus from './component/whyus'
import Footer from './component/footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Offer />
      <Types />
      <Whyus />
      <Footer />
    </>
  )
}

export default App