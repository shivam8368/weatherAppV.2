import react, {useState} from 'react';

import './App.css';
import Axios from 'axios';

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
  const [temprature, setTemprature] = useState(null);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  // Update state with current search bar input

  const searchBarHandler = (e) => {
     e.preventDefault();
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
    const city = {searchInput}
    const API_KEY = "c51cdb45bfc78f8fb3e3a788ef360064"
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const URL = API_URL + `?q=${city}&appid=${API_KEY}&units=metric`;
    // setSearchInput('');
    // setDescription('');
    // setTemprature(null);
    // setError(false);
    // setLoading(true);

    Axios.get(URL)
    .then(res => res.json())
    .then(result => console.log(result))
    

  }


  return (
    <div className="App">
      {/* <Header
          color={assetMapping.colors[
            // Set header color based on weather condition; if error, set color to red
            (error === true) ? "error" : {description}
          ]}
          onClickHandler={tryAgainHandler} /> */}
        <main className="AppMain">
          <SearchBar
            value={searchInput}
            onChangeHandler={e => setSearchInput(e.target.value)}
            onClickHandler={updateWeather}
            error={error} />
        </main>
      
    </div>
  );
}

export default App;
