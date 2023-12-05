// css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// axios
import axios from 'axios';
// react
import { useState } from 'react';
// bootstrap
import Container from 'react-bootstrap/Container';
// components
import CityInput from './components/CityInput';
import LocationInfo from './components/LocationInfo';

// API keys
const LOC_API_KEY = import.meta.env.VITE_LOC_API_KEY;

function App() {

  const [location, setLocation] = useState({});

  async function getLatLong(cityName) {
    const API_request = `https://us1.locationiq.com/v1/search.php?key=${LOC_API_KEY}&q=${cityName}&format=json`;
    const response = await axios.get(API_request);
    const locationObj = response.data[0];
    setLocation(locationObj);
    console.log(locationObj);
  }

  return (
    <Container>
    
      <CityInput onExplore={getLatLong} />

      <LocationInfo location={location} />

    </Container>
  )
}

export default App;
