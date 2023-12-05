// bootstrap
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';

function LocationInfo(props) {
  return (
    <Alert>
      <Alert.Heading>
        City: {props.location.display_name}
      </Alert.Heading>
      <hr />
      <ListGroup>
        <ListGroup.Item variant='secondary'>Latitude: {props.location.lat}</ListGroup.Item>
        <ListGroup.Item variant='secondary'>Longitude: {props.location.lon}</ListGroup.Item>
      </ListGroup>
    </Alert>
  )
}

export default LocationInfo;