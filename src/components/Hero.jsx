import React from 'react'
import { HeroData } from '../utils/constants'
import './Hero.css'
import Button from './Button'
const Hero = () => {
  console.log(HeroData.HeroImg)
  return (
    <div className="container">
        <div className="row">
            <div className="hero">
                <div className="left">
                    <h1 className='left-text'>{HeroData.HeroText}</h1>
                    <Button text="More About Us" color="white" width={10}/>
                </div>
                <div className="right">
                    <img src='src\assets\images\orphch1.jpg' className='right-img' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero