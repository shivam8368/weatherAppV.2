import React from 'react'
import './Icon.css'
import Clear from '../../assets/images/Clear.svg'
import {CloudWind} from '../../assets/images/Cloud-wind.svg'
import Clouds from '../../assets/images/Clouds.svg'
import Drizzle from '../../assets/images/Drizzle.svg'
import Moon from '../../assets/images/Moon.svg'
import NightRainy from '../../assets/images/Night-rainy.svg'
import Night from '../../assets/images/Night.svg'
import Rain from '../../assets/images/Rain.svg'
import Thunderstorm from '../../assets/images/Thunderstorm.svg'
import Tornado from '../../assets/images/Tornado.svg'

const Icon = ({type}) => {
    return (
        <img
          className = "Icon"
          src = {require(`../../assets/images/${type}.svg`).default}
          alt = {type}
        />
    )
}

export default Icon
