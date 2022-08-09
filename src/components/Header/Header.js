import React from 'react'
import './Header.css'
import Logo from '../../elements/Logo/Logo'

const Header = ({color, onClickHandler, logoName}) => {
    return (
        
        <header className = "Header" style = {{backgroundColor : color }}>
            <Logo logoName={logoName} colorScheme = {'light'} clicked = {onClickHandler} />
        </header>
    )
}

export default Header
