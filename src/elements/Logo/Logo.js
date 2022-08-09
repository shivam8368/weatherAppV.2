import React from 'react'
import './Logo.css'

const Logo = ({colorScheme, clicked, logoName}) => {
    return (
     <h1 className = {(colorScheme === 'dark') ? "Logo Dark" : "Logo Light" } onClick = {clicked}>
        {logoName}
     </h1>
    )
}

export default Logo
