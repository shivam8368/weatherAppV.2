import React from 'react'
import './MinTemprature.css'

const MinTemprature = ({degrees}) => {
    return (
        <div className= "MinTemperatureWrapper">
            {Math.round(degrees)}<span className= "MinTemperatureSymbol">°c</span>
        </div>
        
    )
}

export default MinTemprature
