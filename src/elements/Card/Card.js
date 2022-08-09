import React from 'react'
import './Card.css'

const Card = ({data, type}) => {
    return (
        <div className = {type}>
            {data}
        </div>
    )
}

export default Card
