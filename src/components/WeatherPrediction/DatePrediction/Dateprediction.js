import React from 'react'
import dateformat from 'dateformat';
import './DatePrediction.css'

const Dateprediction = ({unixTime}) => {

 const day = new Date(unixTime * 1000);

    return (
        <div className="DatePredictionWrapper">
            {dateformat(day, "dddd, mmmm dd")} 
        </div>
    )

}

export default Dateprediction
