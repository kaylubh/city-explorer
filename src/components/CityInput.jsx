// react
// import { useState } from 'react';
// axios
import axios from 'axios';
// bootstrap
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function CityInput(props) {

  // const [cities, setCities] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    getCityData();
  }

  async function getCityData() {

    const cityNameInput = document.getElementById('inputCityName').value;

    try {
      const API_request = `https://us1.locationiq.com/v1/search.php?key=${props.API_KEY}&q=${cityNameInput}&format=json`;
      const response = await axios.get(API_request);
      // setCities(response.data);
      props.onExplore(response.data[0]);
      props.onError({});
    } catch (error) {
      props.onError(error);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder='search any city to explore'
          id="inputCityName"
        />
        <Button variant='primary' type='submit'>Explore</Button>
      </InputGroup>
    </Form>
  )
}

export default CityInput;