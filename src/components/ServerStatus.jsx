// bootstrap
import Alert from 'react-bootstrap/Alert';

function ServerStatus (props) {


  return (
    <Alert show={props.show} variant='info'>
      <Alert.Heading>Explore Server Loading</Alert.Heading>
      <hr />
      <p>Some information will not load yet</p>
    </Alert>
  )
}

export default ServerStatus;
