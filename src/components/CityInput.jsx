// react
import { useState } from 'react';
// axios
import axios from 'axios';
// bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CityInput(props) {

  const [cities, setCities] = useState({});

  async function getCityData() {
    const cityNameInput = document.getElementById('inputCityName').value;

      const API_request = `https://us1.locationiq.com/v1/search.php?key=${props.API_KEY}&q=${cityNameInput}&format=json`;
      const response = await axios.get(API_request);
      setCities(response.data);
      props.onExplore(response.data[0]);
  }

  return (
    <Form>
      <Form.Label htmlFor="inputCityName">City Name</Form.Label>
      <Form.Control
        type="text"
        id="inputCityName"
        aria-describedby="inputCityNameHelpBlock"
      />
      <Button variant='primary' onClick={getCityData}>Explore</Button>
      <Form.Text id="inputCityNameHelpBlock" muted>
        Enter the name of a city to explore
      </Form.Text>

    </Form>
  )
}

export default CityInput;