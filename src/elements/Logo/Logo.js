import React from 'react'
import 'Logo.css'

const Logo = ({colorScheme, clicked}) => {
    return (
     <h1 className = {(colorScheme === 'dark') ? "Logo Light" : "Logo Dark" } onClick = {clicked}>
        My Weather

     </h1>
    )
}

export default Logo
