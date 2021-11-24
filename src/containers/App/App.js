import {useState, useEffect} from 'react';

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
import PlaceDetails from '../../components/PlaceDetails/PlaceDetails';
import WeatherPrediction from '../../components/WeatherPrediction/WeatherPrediction';


const App = () => {
  
  const [searchInput, setSearchInput] = useState('');
  const [temprature, setTemprature] = useState(null);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [tempFeelsLike, setTempFeelsLike] =  useState(null);
  const [humidity, setHumidity] = useState(null);
  const [winds, setWinds] = useState(null);
  const [precipitation, setPrecipitation] = useState(null);

  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')


  const [longitude, setLongitude] = useState(null)
  const [latitude, setLatitude] = useState(null)


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
     setTempFeelsLike(null)
     setHumidity(null)
     setWinds(null )
     setCountry('')
     setCity('')
     setLongitude(null)
     setLatitude(null)

     
  };

  // Fetch current weather information and update state
  const updateWeather = () => {
    const API_KEY = "c51cdb45bfc78f8fb3e3a788ef360064"
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const URL = API_URL + `?q=${searchInput}&appid=${API_KEY}&units=metric`;
    

    Axios.get(URL)
    .then(res => {
      
        if (res.data.cod === 200) {

          setLoading(false);
          setTemprature(res.data.main.temp);
          setDescription(res.data.weather[0].main);
          setTempFeelsLike(res.data.main.feels_like)
          setHumidity(res.data.main.humidity)
          setWinds(((res.data.wind.speed) * 3.6).toFixed(1) )
          setCountry(res.data.sys.country)
          setCity(res.data.name)
          setLongitude(res.data.coord.lon)
          setLatitude(res.data.coord.lat)

          // setPrecipitation(res)
          setSearchInput('');

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


  useEffect(() => {

    
      const API_KEY = "c51cdb45bfc78f8fb3e3a788ef360064"
      const API_URL = 'https://api.openweathermap.org/data/2.5/onecall';
      const URL = API_URL + `?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;


      Axios.get(URL)
      .then(res => {
        console.log(res)
      })


    



  }, [longitude])

// rendering current weather details

  const renderCardContent =  () => {

    let cardContent = <Preview />

    if (loading) {
      cardContent = <MoonLoader />
    } else if (error) {
      cardContent = <ErrorNotice onChangeHandler = {tryAgainHandler} />
    } else if (temprature && description !== '') {

      // descriptionText, temperature, precipitation, humidity, wind, feelsTemprature, iconType
      cardContent = <WeatherDetails 
                    descriptionText = {description} 
                    temperature = {temprature}
                    iconType = "Icon"
                    humidity = {humidity}
                    wind = {winds}
                    feelsTemprature = {tempFeelsLike}
                    />
    };


    return cardContent 

  };

// rendering location details 

  const renderDetails = () => {
   
   
    let detailsContent = <PlaceDetails city = {city}
                                        country = {country}
                                        descriptionText = {description}
    
    />

    return detailsContent
  }


  // rendering weather predictions 

  const renderPredictions = () => {

    let predictionContent  = <WeatherPrediction
                              type = "Snow"
                              minDegrees = "2"
                              maxDegrees = "5"
                              iconType = "PredictionIcon"
                              unixTime = "1618308000"
    />

    return predictionContent;
  }


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
            <div className="CardSection">
            <Card data = {renderCardContent()} type = "Card" />
            <Card data = {renderDetails()} type = "DetailsCard" />
            </div>
        </main>
        
       <Footer onClickHandler={tryAgainHandler} />

       <div className="predictions">
         <Card data= {renderPredictions()}type = "PredictionCard"/>
       </div>
    </div>
  );
}

export default App;
