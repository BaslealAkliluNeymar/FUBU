import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <section className='footer_container'>
        <div className="footer_row">
            <div className="logo_footer">
                <h1>FUBU</h1>
            </div>
            <div className="company">
                <h1>Company</h1>
                <a href="" className='links'><p>Services</p></a>
                <a href="" className='links'><p>About Us</p></a>
                <a href="" className='links'><p>Local Orphanages</p></a>
                <a href="" className='links'><p>International NGOs</p></a>
            </div>

            <div className="service">
                <h1>Services</h1>
                <a href=""  className='links'><p>Connecting</p></a>
                <a href="" className='links'><p>Consulting</p></a>
                <a href="" className='links'><p>Training and Workshops</p></a>
                <a href="" className='links'><p>International NGOs</p></a>
            </div>

            <div className="contact">
                <h1>Contact</h1>
                 <p>Tel: +1 206 446 5620</p>
                 <p>Email : lidyakinfe97@gmail.com</p>
            </div>

            <div className="contact">
                <h1>Contact</h1>
                 <p>Tel: +1 206 446 5620</p>
                 <p>Email : lidyakinfe97@gmail.com</p>
            </div>

            
        </div>
    </section>
  )
}

export default Footer