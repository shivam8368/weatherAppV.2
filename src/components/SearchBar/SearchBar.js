import React from 'react'
import './SearchBar.css'
import InputField from '../../elements/InputField/InputField'
import Button from '../../elements/Button/Button'

const SearchBar = ({value, onChangeHandler, error, onClickHandler}) => {
    return (
        <div className= "SearchBarWrapper">
            <InputField
                type="text"
                name="city"
                label="Location"
                placeholder="Enter a city" 
                value={value} 
                handleChange={onChangeHandler} 
                error={error} />
            <Button 
                name="searchSubmit" 
                type="submit" 
                position="onForm"
                clicked={onClickHandler}
                buttonText = "Set"
            />
        </div>
    )
}

export default SearchBar
