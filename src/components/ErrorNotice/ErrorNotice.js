import React from 'react'
import './ErrorNotice.css'
import Button from '../../elements/Button/Button'

const ErrorNotice = ({onClickHandler}) => {
    return (
        <div className='ErrorNoticeWrapper'>
            <h1 className='NotFound404'>404</h1>
            <div className='ErrorTextWrapper'>
                <h2 className='NotFoundHeading'>Oops!</h2>
                <p className='NotFoundDetails'>We can't find the city you are looking for.</p>
                <Button 
                    name="tryAgain" 
                    type="button" 
                    position="onErrorNotice"
                    clicked={onClickHandler}
                    buttonText = "Try Again"
                    />
            </div>
        </div>
    )
}

export default ErrorNotice;

