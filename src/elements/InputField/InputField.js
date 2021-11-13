import React from 'react'
import './InputField.css'

const InputField = ({name, type, placeholder, value, handleChange , error, label}) => {
    return (
        <div className = "InputFieldWrapper">
            <label htmlFor = {name}>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                style={(error) ? {'borderBottomColor': assetMapping.colors.error} : null}
                required 
            
            
            />
        </div>
    )
}

export default InputField
