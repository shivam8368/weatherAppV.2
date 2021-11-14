import React from 'react'
import './Footer.css'
import Logo from '../../elements/Logo/Logo'


const Footer = ({onClickHandler}) => {
    return (
        
        <footer className = "Footer">
            <Logo colorScheme = "dark" clicked = {onClickHandler} />
            <div className="Separator"></div>
        </footer>
    )
}

export default Footer
