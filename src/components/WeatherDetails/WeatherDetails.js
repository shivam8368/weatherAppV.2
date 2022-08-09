import React from 'react'
import './WeatherDetails.css'

import Icon from '../../elements/Icon/Icon';
import Temprature from './Temprature/Temprature';

import Details from './Details/Details';
import FeelsLike from './FeelsLIke/FeelsLike';

const WeatherDetails = ({descriptionText, temperature, precipitation, humidity, wind, feelsTemprature, iconType}) => {
    return (
        <div className= "WeatherDetailsWrapper">
            <div className= "WeatherIconWrapper">
                <Icon type={descriptionText} iconType = {iconType} />    
            </div>
            <div className= "WeatherTempWrapper">
                <Temprature degrees={temperature} />
                <FeelsLike degrees = {feelsTemprature} />

            </div>

            <div className= "WeatherDataWrapper">    
                <Details 
                    precipitation = {precipitation}
                    humidity = {humidity}
                    wind = {wind}

                />
            </div>
               
            
        </div>
    )
}

export default WeatherDetails
