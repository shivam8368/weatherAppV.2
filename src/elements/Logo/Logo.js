import React from 'react'
import './Logo.css'

const Logo = ({colorScheme, clicked}) => {
    return (
     <h1 className = {(colorScheme === 'dark') ? "Logo Dark" : "Logo Light" } onClick = {clicked}>
        My Weather

     </h1>
    )
}

export default Logo
