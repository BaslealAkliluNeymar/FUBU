import React from 'react'
import { Header , Footer ,AboutHero,AboutStatement,NameCard,Grid} from '../../components/index'
const About = () => {
 
  return (
    <section className='about_page'>
        <Header/>
        <AboutHero />
        <AboutStatement />
        <Grid />
        <Footer/>
    </section>
  )
}

export default About