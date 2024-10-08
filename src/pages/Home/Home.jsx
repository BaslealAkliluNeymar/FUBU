import React from 'react'
import { Hero, Header,About,Services,Form,Footer } from '../../components/index'
import './Home.css'
const Home = () => {
  return (
      <div className='home-page'>
        <Header/>
        <Hero />
        <About />
        <Services />
        <Form />
        <Footer />
      </div>
    
    
  )
}

export default Home