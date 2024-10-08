import React from 'react'
import './namecard.css'
const NameCard = ({item}) => {
  console.log({item})
  return (
    <section>
        <div className="card">
            <img className="image" src="src\assets\images\orph3.jpg" alt="" />
            <div className="names">
                <h2>Lidya Kinfe</h2>
                <h3>General Manager</h3>
            </div>
        </div>
    </section>
    
  )
}

export default NameCard