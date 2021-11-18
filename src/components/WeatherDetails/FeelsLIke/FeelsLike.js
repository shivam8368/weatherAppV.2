import React from 'react'
import './FeelsLike.css'

const FeelsLike = ({degrees}) => {
    return (
        <div className= "FeelsLIkeWrapper">
            {Math.round(degrees)}<span className= "FeelsLIkeSymbol">°c</span>
            <p style= {{fontSize: "1rem"}}>Feels Like</p>
        </div>
        
    )
}

export default FeelsLike
