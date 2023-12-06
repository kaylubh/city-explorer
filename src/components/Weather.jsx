// bootstrap
import Stack from 'react-bootstrap/Stack';
import Accordion from 'react-bootstrap/Accordion';

function Weather(props) {

  const locationName = props.location.display_name;
  const cityName = locationName.split(',')[0];


  return (
    <Stack>
      <h3>{cityName} Weather</h3>
      <Accordion>

      </Accordion>
    </Stack>
  );
}

export default Weather;