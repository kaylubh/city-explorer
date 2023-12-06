// bootstrap
import Stack from 'react-bootstrap/Stack';
import Accordion from 'react-bootstrap/Accordion';


function Weather(props) {

  return (
    <Stack>
      <h3>{props.cityName} Weather</h3>
      <Accordion>
        {props.weatherData.map((forecast) =>
          <Accordion.Item key={forecast.date}>
            <Accordion.Header>{forecast.date}</Accordion.Header>
            <Accordion.Body>{forecast.description}</Accordion.Body>
          </Accordion.Item>
        )}
      </Accordion>
    </Stack>
  );
}

export default Weather;