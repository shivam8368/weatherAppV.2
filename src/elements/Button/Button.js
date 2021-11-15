import React from 'react'
import './Button.css'

const Button = ({position, type, name, clicked, buttonText}) => {
    return (
        <div className = {( position === 'onForm') ? "ButtonWrapper FormButtonWrapper": "ButtonWrapper"}>
            <button
              type = {type}
              name = {name}
              onClick = {clicked}
            
            >{buttonText}</button>
        </div>
    )
}

export default Button
