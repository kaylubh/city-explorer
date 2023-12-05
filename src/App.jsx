// css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// axios
import axios from 'axios';
// react
import { useState } from 'react';
// bootstrap
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
// components
import CityInput from './components/CityInput';
import LocationInfo from './components/LocationInfo';
import CityMap from './components/CityMap';
import ErrorAlert from './components/ErrorAlert';

// API keys
const LOC_API_KEY = import.meta.env.VITE_LOC_API_KEY;

function App() {

  const [location, setLocation] = useState({});
  const [mapImage, setMapImage] = useState();
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});

  async function getCityData(cityName) {
    try {
      const API_request = `https://us1.locationiq.com/v1/search.php?key=${LOC_API_KEY}&q=${cityName}&format=json`;
      const response = await axios.get(API_request);
      const locationObj = response.data[0];
      setLocation(locationObj);
      getMapImage(locationObj);
    } catch (error) {
      setErrorMessage(error);
      setShowError(true);
    }
  }

  async function getMapImage(locationObj) {
    const API_request = `https://maps.locationiq.com/v3/staticmap?key=${LOC_API_KEY}&center=${locationObj.lat},${locationObj.lon}&zoom=12`
    const response = await axios.get(API_request);
    setMapImage(response.config.url);
  }

  return (
    <Container>
      <Stack gap={3} direction='horizontal'>

        <Stack gap={3}>

          <CityInput onExplore={getCityData} />

          <LocationInfo location={location} />

          <ErrorAlert show={showError} errorMessage={errorMessage} />

        </Stack>

        <CityMap source={mapImage} location={location} />

      </Stack>
    </Container>
  )
}

export default App;