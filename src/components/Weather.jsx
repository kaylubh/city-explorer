// bootstrap
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function Weather(props) {

  return (
    <>
      <Card>
        <Card.Header>{props.cityName} Weather</Card.Header>
        <Card.Body>
          <Card.Title>{props.weatherData.description}</Card.Title>
          <ListGroup>
            <ListGroup.Item>Temperature: {Math.round((props.weatherData.temp * (9 / 5)) + 32)}&deg;F</ListGroup.Item>
            <ListGroup.Item>Feels Like: {Math.round((props.weatherData.feelsTemp * (9 / 5)) + 32)}&deg;F</ListGroup.Item>
            <ListGroup.Item>Humidity: {props.weatherData.humidity}%</ListGroup.Item>
            <ListGroup.Item>Cloud Coverage: {props.weatherData.cloudCoverage}%</ListGroup.Item>
            <ListGroup.Item>Rain: {(props.weatherData.rain)}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <Alert show={props.showError} variant='warning'>
        <Alert.Heading>Error</Alert.Heading>
        <hr />
        <p>No weather data available for this city</p>
      </Alert>
    </>

  );
}

export default Weather;