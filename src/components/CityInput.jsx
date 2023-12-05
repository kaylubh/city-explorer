// bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CityInput(props) {

  function updateQuery() {
    const cityNameInput = document.getElementById('inputCityName').value;
    props.onExplore(cityNameInput);
  }

  return (
    <Form>
      <Form.Label htmlFor="inputCityName">City Name</Form.Label>
      <Form.Control
        type="text"
        id="inputCityName"
        aria-describedby="inputCityNameHelpBlock"
      />
      <Button variant='primary' onClick={updateQuery}>Explore</Button>
      <Form.Text id="inputCityNameHelpBlock" muted>
        Enter the name of a city to explore
      </Form.Text>
      
    </Form>
  )
}

export default CityInput;