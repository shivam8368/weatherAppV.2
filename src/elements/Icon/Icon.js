import React from 'react'
import './Icon.css'

const Icon = ({type}) => {
    return (
        <img
          className = "Icon"
          src = {require(`../../assets/images/${type}.svg`)}
          alt = {type}
        />
    )
}

export default Icon
