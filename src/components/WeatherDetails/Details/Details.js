import React from 'react'
import './Details.css'

const Details = ({precipitation, humidity, wind, speedConverter}) => {
    return (
        <div className = "DetailsWrapper" >
            <p>Precipitation : {precipitation} %</p>
            <p>Humidity : {humidity} %</p>
            <p>Wind : {wind} kmph / <span style = {{cursor: "pointer"}} onClick = {speedConverter}>mph</span></p>
        </div>
    )
}

export default Details
