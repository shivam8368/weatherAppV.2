import React from 'react'
import './Header.css'
import Logo from '../../elements/Logo/Logo'

const Header = ({color, onClickHandler}) => {
    return (
        
        <header className = "Header" style = {{backgroundColor : color }}>
            <Logo colorScheme = {'light'} clicked = {onClickHandler} />
        </header>
    )
}

export default Header
