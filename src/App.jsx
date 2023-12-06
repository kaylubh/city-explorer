// css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// react
import { useState } from 'react';
// axios
import axios from 'axios';
// bootstrap
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
// components
import CityInput from './components/CityInput';
import LocationInfo from './components/LocationInfo';
import CityMap from './components/CityMap';
import ErrorAlert from './components/ErrorAlert';
import Weather from './components/Weather';


// API keys
const LOC_API_KEY = import.meta.env.VITE_LOC_API_KEY;
// placeholder city

function App() {

  const [city, setCity] = useState({});
  const [errorMessage, setErrorMessage] = useState({});
  const [cityWeather, setCityWeather] = useState([]);

  function exploreCity(selectedCity) {
    setCity(selectedCity);
    fetchWeather(selectedCity);
  }

  async function fetchWeather(selectedCity) {
    const displayName = selectedCity.display_name;
    const cityName = displayName.split(',')[0];

    const API = 'http://localhost:3001';
    const response = await axios.get(`${API}/weather?searchQuery=${cityName}&lat=${selectedCity.lat}&lon=${selectedCity.lon}`)
    setCityWeather(response.data);
  }

  return (
    <Container>

      <Stack gap={3} direction='horizontal'>

        <Stack gap={3}>

          <CityInput onExplore={exploreCity} onError={setErrorMessage} API_KEY={LOC_API_KEY} />

          <LocationInfo location={city} />

          <ErrorAlert errorMessage={errorMessage} />

        </Stack>

        <CityMap location={city} API_KEY={LOC_API_KEY} />

      </Stack>

      <Weather location={city} weatherData={cityWeather} />

    </Container>
  )
}

export default App;
