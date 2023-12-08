// css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// react
import { useEffect, useState } from 'react';
// axios
import axios from 'axios';
// bootstrap
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
// components
import Header from './components/Header';
import Footer from './components/Footer';
import CityInput from './components/CityInput';
import ServerStatus from './components/ServerStatus';
import LocationInfo from './components/LocationInfo';
import CityMap from './components/CityMap';
import ErrorAlert from './components/ErrorAlert';
import Weather from './components/Weather';
import Movies from './components/Movies';
// API data
const LOC_API_KEY = import.meta.env.VITE_LOC_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

function App() {

  const [loading, setLoading] = useState(true);
  const [exploreServerError, setExploreServerError] = useState(false);
  const [city, setCity] = useState({});
  const [cityName, setCityName] = useState('');
  const [errorMessage, setErrorMessage] = useState({});
  const [cityWeather, setCityWeather] = useState();
  const [weatherError, setWeatherError] = useState(false);
  const [movies, setMovies] = useState();

  useEffect(() => {
    exploreServerStatus();
  }, []);

  async function exploreServerStatus() {
    try {
      const response = await axios.get(`${API_URL}/status`);
      setLoading(response.data);
      setExploreServerError(false);
    } catch (error) {
      console.error(error);
      setExploreServerError(true);
    }
  }

  function exploreCity(selectedCity) {

    setCity(selectedCity);

    const displayName = selectedCity.display_name;
    const shortName = displayName.split(',')[0];
    setCityName(shortName);

    getWeather(selectedCity);
    getMovies(shortName);
  }

  async function getWeather(query) {
    try {
      const url = `${API_URL}/weather?lat=${query.lat}&lon=${query.lon}`;
      const response = await axios.get(url)
      setCityWeather(response.data[0]);
      setWeatherError(false);
    } catch (error) {
      setWeatherError(true);
      setCityWeather({});
    }
  }

  async function getMovies(query) {
    try {
      const url = `${API_URL}/movies?cityName=${query}`;
      const response = await axios.get(url);
      setMovies(response.data);
    } catch (error) {
      console.log(error);
      setMovies([]);
    }
  }

  return (
    <Container fluid>

      <Header />

      <Stack gap={3} direction='horizontal'>

        <Stack gap={3}>

          <CityInput onExplore={exploreCity} onError={setErrorMessage} API_KEY={LOC_API_KEY} loading={loading} />

          <ServerStatus showStatus={loading} showError={exploreServerError} />

          <LocationInfo location={city} />

          <ErrorAlert errorMessage={errorMessage} />

        </Stack>

        <CityMap location={city} API_KEY={LOC_API_KEY} />

      </Stack>

      <Weather location={city} cityName={cityName} weatherData={cityWeather} showError={weatherError} />

      <Movies moviesData={movies} cityName={cityName} />

      <Footer />

    </Container>
  )
}

export default App;
