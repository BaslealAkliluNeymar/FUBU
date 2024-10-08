import React from 'react'
import './grid.css'
import { GridData } from '../utils/constants'
import { NameCard } from './index'
const Grid = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="grid">
                {
                    GridData.map((item) =>{
                        return <NameCard item={item} className="namecard"/>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Grid