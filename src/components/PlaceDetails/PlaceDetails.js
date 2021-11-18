import React from 'react'
import './PlaceDetails.css'
import Date from './Date/Date'
import Location from './Location/Location'
import Description from './Description/Description'

const PlaceDetails = ({city, country, descriptionText}) => {
    return (
        <div className = "PlaceDetailsWrapper">
           <Location city = {city} country = {country} />
           <Date />
           <Description type = {descriptionText} />
        </div>
    )
}

export default PlaceDetails
