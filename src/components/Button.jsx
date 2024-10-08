import React from 'react'
import './Button.css'
const Button = (props) => {
  const { text, color, width } = props

  return (
    <button className='btn' style={{
      color:color,
      width:`${width}rem`
    }}>
        {text}
    </button>
  )
}

export default Button