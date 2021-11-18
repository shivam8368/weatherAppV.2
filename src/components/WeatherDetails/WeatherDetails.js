import React from 'react'
import './WeatherDetails.css'

import Icon from '../../elements/Icon/Icon';
import Temprature from './Temprature/Temprature';
import Date from '../PlaceDetails/Date/Date';
import Details from './Details/Details';
import FeelsLike from './FeelsLIke/FeelsLike';

const WeatherDetails = ({descriptionText, temperature, precipitation, humidity, wind, speedConverter, feelsTemprature}) => {
    return (
        <div className= "WeatherDetailsWrapper">
            <div className= "WeatherIconWrapper">
                <Icon type={descriptionText} />    
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
                    speedConverter = {speedConverter}

                />
            </div>
               
            
        </div>
    )
}

export default WeatherDetails
