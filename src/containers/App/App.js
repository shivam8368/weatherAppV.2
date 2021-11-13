import './App.css';

// Components
import ErrorNotice from '../../components/ErrorNotice/ErrorNotice';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Preview from '../../components/Preview/Preview';
import SearchBar from '../../components/SearchBar/SearchBar';
import Description from '../../components/WeatherDetails/Description/Description';
import Temprature from '../../components/WeatherDetails/Temprature/Temprature';
import WeatherDetails from '../../components/WeatherDetails/WeatherDetails';

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <ErrorNotice />
      <Footer />
      <Header />
      <Preview />
      <SearchBar />
      <Description />
      <Temprature />
      <WeatherDetails />
    </div>
  );
}

export default App;
