import React from 'react'
import './donate.css'
import { DonateGrid } from '../../utils/constants'
import { Header, Footer,NameCard,Grid } from '../../components/index'
const Donate = () => {
  return (
    <div>
        <Header />
        {
          DonateGrid.map((item) =>{
            return <Grid item ={item} />
          })
        }
        <Footer />
    </div>
  )
}

export default Donate