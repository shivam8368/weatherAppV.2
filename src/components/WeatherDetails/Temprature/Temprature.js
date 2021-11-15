import React from 'react'
import './Temprature.css'

const Temprature = ({degrees}) => {
    return (
        <div className= "TemperatureWrapper">
            {Math.round(degrees)}<span className= "TemperatureSymbol">°</span>
        </div>
    )
}

export default Temprature
