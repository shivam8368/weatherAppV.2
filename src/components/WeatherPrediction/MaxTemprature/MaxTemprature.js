import React from 'react'
import './MaxTemprature.css'

const MaxTemprature = ({degrees}) => {
    return (
        <div className= "MaxTempratureWrapper">
            {Math.round(degrees)}<span className= "MaxTempratureSymbol">°c</span>
        </div>
        
    )
}

export default MaxTemprature
