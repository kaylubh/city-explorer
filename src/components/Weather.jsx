// bootstrap
import Stack from 'react-bootstrap/Stack';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';


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
      <Alert show={props.showError} variant='warning'>
        <Alert.Heading>Error</Alert.Heading>
        <hr />
        <p>No weather data available for this city</p>
      </Alert>
    </Stack>
  );
}

export default Weather;