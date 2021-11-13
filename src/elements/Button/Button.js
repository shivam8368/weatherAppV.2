import React from 'react'
import './Button.css'

const Button = ({position, type, name, clicked}) => {
    return (
        <div className = {( position === 'onForm') ? "ButtonWrapper FormButtonWrapper": "ButtonWrapper"}>
            <button
              type = {type}
              name = {name}
              onclick = {clicked}
            
            >{props.children}</button>
        </div>
    )
}

export default Button
