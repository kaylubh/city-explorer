// bootstrap
import Stack from 'react-bootstrap/Stack';
import Accordion from 'react-bootstrap/Accordion';

function Weather(props) {



  return (
    <Stack>
      <h3>Weather</h3>
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