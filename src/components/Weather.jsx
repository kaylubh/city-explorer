// bootstrap
import Stack from 'react-bootstrap/Stack';
import Accordion from 'react-bootstrap/Accordion';

function Weather(props) {

const locationName = props.location.display_name;
console.log(locationName);
const cityName = locationName.split(',')[0];
console.log(cityName);

  return (
    <Stack>
      <h3>{cityName} Weather</h3>
      <Accordion>
        <Accordion.Item>
          <Accordion.Header></Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Stack>
  )
}

export default Weather;