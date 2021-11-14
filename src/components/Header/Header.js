import React from 'react'
import './Header.css'
import Logo from '../../elements/Logo/Logo'

const Header = ({color, onclickHandler}) => {
    return (
        
        <header className = "header" style = {{backgroundColor : color }}>
            <Logo colorScheme = {'light'} clicked = {onclickHandler} />
        </header>
    )
}

export default Header
