import React from 'react'
import './Footer.css'
import Logo from '../../elements/Logo/Logo'


const Footer = ({onClickHandler, logoName}) => {
    return (
        
        <footer className = "Footer">
            <Logo colorScheme = "dark" clicked = {onClickHandler} logoName={logoName} />
            <div className="Separator"></div>
        </footer>
    )
}

export default Footer
