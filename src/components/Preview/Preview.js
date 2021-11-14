import React from 'react'
import "./Preview.css"
import PreviewImg from '../../assets/images/Preview.svg'

const Preview = () => {
    return (
        <img 
            src = {PreviewImg}
            alt = "Weather App Icon"
            className = "Preview"
        />
    );
}

export default Preview
