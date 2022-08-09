import React from 'react'
import './Details.css'

const Details = ({precipitation, humidity, wind}) => {
    return (
        <div className = "DetailsWrapper" >
            <p>Precipitation : {precipitation} %</p>
            <p>Humidity : {humidity} %</p>
            <p>Wind : {wind} kmph </p>
        </div>
    )
}

export default Details
