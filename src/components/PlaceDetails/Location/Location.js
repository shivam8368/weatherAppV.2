import React from 'react'
import './Location.css'

const Location = ({city , country}) => {
    return (
        <div className = "LocationWrapper" >
            {city} , {country}
        </div>
    )
}

export default Location
