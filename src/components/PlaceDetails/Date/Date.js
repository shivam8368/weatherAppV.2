import React from 'react'
import './Date.css'
import dateformat from 'dateformat'

const date = () => {
    const now = new Date();
    return (
        <div className="DateWrapper">
            {dateformat(now, "dddd, mmmm dd")} 
        </div>
    )
}

export default date
