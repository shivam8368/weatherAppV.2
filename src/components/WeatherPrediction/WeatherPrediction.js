import React from 'react'
import Icon from '../../elements/Icon/Icon'
import Dateprediction from './DatePrediction/Dateprediction'
import DescriptionPrediction from './DescriptionPrediction/DescriptionPrediction'
import MaxTemprature from './MaxTemprature/MaxTemprature'
import MinTemprature from './MinTemprature/MinTemprature'
import './WeatherPrediction.css'

const WeatherPrediction = ({type, minDegrees, maxDegrees, iconType, unixTime}) => {
    return (
        <div className = "WeatherPredictionWrapper">
            <Dateprediction unixTime = {unixTime} />
            <div className="PredictionIconWrapper">
                <Icon type = {type} iconType = {iconType}/>
            </div>
            <DescriptionPrediction type = {type}/>
            <div className="TempPredictionWrapper">
                <MinTemprature degrees = {minDegrees} />
                <MaxTemprature degrees = {maxDegrees} />
            </div>
            <div className="TempPredictionWrapper">
                <p>min</p>
                <p>max</p>
            </div>
            
        </div>
    )
}

export default WeatherPrediction
