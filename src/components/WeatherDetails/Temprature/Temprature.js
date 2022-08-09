import React from 'react'
import './Temprature.css'

const Temprature = ({degrees}) => {
    return (
        <div className= "TemperatureWrapper">
            {Math.round(degrees)}<span className= "TemperatureSymbol">°c</span>
        </div>
        
    )
}

export default Temprature
