import React from 'react'
import './WeatherDetails.css'

import Icon from '../../elements/Icon/Icon';
import Temprature from './Temprature/Temprature';
import Description from './Description/Description';
import Date from './Date/Date';

const WeatherDetails = ({descriptionText = "Snow", temperature}) => {
    return (
        <div className= "WeatherDetailsWrapper">
            <div className= "WeatherIconWrapper">
                <Icon type={descriptionText} />    
            </div>
            <div className= "WeatherDataWrapper">
                <Temprature degrees={temperature} />
                <Description type={descriptionText} />
                <Date />
            </div>
        </div>
    )
}

export default WeatherDetails
