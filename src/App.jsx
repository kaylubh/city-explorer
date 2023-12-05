// css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// react
import { useState } from 'react';
// bootstrap
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
// components
import CityInput from './components/CityInput';
import LocationInfo from './components/LocationInfo';
import CityMap from './components/CityMap';
// import ErrorAlert from './components/ErrorAlert';

// API keys
const LOC_API_KEY = import.meta.env.VITE_LOC_API_KEY;

function App() {

  const [city, setCity] = useState({});
  const [errorMessage, setErrorMessage] = useState({});

  // async function getCityData(cityName) {
  //   try {
  //     const API_request = `https://us1.locationiq.com/v1/search.php?key=${LOC_API_KEY}&q=${cityName}&format=json`;
  //     const response = await axios.get(API_request);
  //     const locationObj = response.data[0];
  //     setCity(locationObj);
  //   } catch (error) {
  //     setErrorMessage(error);
  //     setShowError(true);
  //   }
  // }

  return (
    <Container>
      <Stack gap={3} direction='horizontal'>

        <Stack gap={3}>

          <CityInput onExplore={setCity} onError={setErrorMessage} API_KEY={LOC_API_KEY} />

          <LocationInfo location={city} />

          {/* <ErrorAlert show={showError} errorMessage={errorMessage} /> */}

        </Stack>

        <CityMap location={city} API_KEY={LOC_API_KEY} />

      </Stack>
    </Container>
  )
}

export default App;
