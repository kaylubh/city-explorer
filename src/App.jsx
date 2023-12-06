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
const placeholder = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${LOC_API_KEY}&q=Seattle&format=json`);

function App() {

  const [city, setCity] = useState(placeholder.data[0]);
  const [errorMessage, setErrorMessage] = useState({});

  return (
    <Container>

      <Stack gap={3} direction='horizontal'>

        <Stack gap={3}>

          <CityInput onExplore={setCity} onError={setErrorMessage} API_KEY={LOC_API_KEY} />

          <LocationInfo location={city} />

          <ErrorAlert errorMessage={errorMessage} />

        </Stack>

        <CityMap location={city} API_KEY={LOC_API_KEY} />

      </Stack>

      <Weather location={city} />

    </Container>
  )
}

export default App;
