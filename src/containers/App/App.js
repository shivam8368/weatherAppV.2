import react, {useState} from 'react';

import './App.css';
import Axios from 'axios';
import { MoonLoader } from 'react-spinners'

// Components
import assetMapping from '../../assets/assetMapping.json';
import Card from '../../elements/Card/Card';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import WeatherDetails from '../../components/WeatherDetails/WeatherDetails';
import Preview from '../../components/Preview/Preview';
import ErrorNotice from '../../components/ErrorNotice/ErrorNotice';


const App = () => {
  
  const [searchInput, setSearchInput] = useState('');
  const [temprature, setTemprature] = useState(0);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  // Update state with current search bar input

  const searchBarHandler = (e) => {
     setSearchInput(e.target.value);

  };

  // Reset state after clicking on Logo or Try Again button

  const tryAgainHandler = () => {
     setSearchInput('');
     setDescription('');
     setTemprature(null);
     setError(false);

     
  };

  // Fetch weather information and update state
  const updateWeather = () => {
    const API_KEY = "c51cdb45bfc78f8fb3e3a788ef360064"
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const URL = API_URL + `?q=${searchInput}&appid=${API_KEY}&units=metric`;
    // setSearchInput('');
    // setDescription('');
    // setTemprature(null);
    // setError(false);
    // setLoading(true);

    Axios.get(URL)
    .then(res => {
      
        if (res.data.cod === 200) {

          setLoading(false);
          setTemprature(res.data.main.temp);
          setDescription(res.data.weather[0].main);
          setSearchInput('');
          console.log(res.data);

        } else {
          throw res.data.cod
        };

      })
    .catch(err => {
      console.log(err);
      setLoading(false);
      setError(true)
      }

    )

  }


  const renderCardContent =  () => {

    let cardContent = <Preview />

    if (loading) {
      cardContent = <MoonLoader />
    } else if (error) {
      cardContent = <ErrorNotice onChangeHandler = {tryAgainHandler} />
    } else if (temprature && description !== '') {
      cardContent = <WeatherDetails descriptionText = {description} temperature = {temprature} />
    };


    return cardContent 

  };



  return (
    <div className="App">
      <Header
          color={assetMapping.colors[
            // Set header color based on weather condition; if error, set color to red
            (error) ? "error" : `"${description}"`
          ]}
          onClickHandler={tryAgainHandler} />
        <main className="AppMain">
          <SearchBar
            value={searchInput}
            onChangeHandler={searchBarHandler}
            onClickHandler={updateWeather}
            error={error} />
            <Card data = {renderCardContent()} />
        </main>
        
       <Footer onClickHandler={tryAgainHandler} />
    </div>
  );
}

export default App;
