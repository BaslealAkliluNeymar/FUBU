import React from 'react'
import './form.css'
// import Button from './index'
const Form = () => {
  return (
    <div className="services_container">
      <div className="services_row">
        <div className="form_container">


            <div className="services_left">
              <div className="services_text">
                <h1>
                  Let's do something great together!
                </h1>
                <p>
                  Have a question, suggestion, or just want to say hello?
                  We'd love to hear from you. Feel free to reach out to us!
                </p>
              </div>
              <div className="services_contact">
                <p>+251 928747043</p>
                <p>Coremadeo Plaza (On the road from Demble to bole Airport) Addis Ababa</p>
              </div>
            </div>


            <div className="services_right">
              <div className="services_form">
                  <form action="">
                    <input type="text" name="" id="" placeholder='First Name'/>
                    <input type="text" name="" id="" placeholder='First Name'/>
                    <input type="email" name="" id="" placeholder='First Name'/>
                    <textarea name="" id="" placeholder='Your Message'></textarea>
                  </form>
              </div>
              {/* <Button /> */}

            </div>
        </div>
      </div>
    </div>
  )
}

export default Form