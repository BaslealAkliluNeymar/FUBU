import React from 'react'
import Button from './Button'
import './about.css'
const About = () => {
  return (
    <div className="about_container">
      <div className="row">
            <div className="about">
                <h1 className='about_header'>About Us</h1>
                <div className="about-inside">
                    <div className="left_about">
                        <span>FUBU</span>
                        <h1>FOR US BY US</h1>
                    </div>
                    <div className="right_about">
                        <h1>Virtual Information Hub</h1>
                        <p>The goal of this information hub is to mobilize resources and support, connect local and international sponsors and donors with both private and public orphanages and community-based organizations working to reduce or prevent children from becoming orphaned, displaced, and homeless children and youths; and amplify donors and recipients organization,
                            and governmental interactions in this vital issue.</p>
                        <Button text ="More" color ="black" width={6}/>
                    </div>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default About