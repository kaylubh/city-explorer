// bootstrap
import Alert from 'react-bootstrap/Alert';

function ServerStatus(props) {
  return (
    <>
      <Alert show={props.showStatus} variant='info'>
        <Alert.Heading>Explore Server Loading</Alert.Heading>
        <hr />
        <p>Some information will not load yet</p>
      </Alert>
      <Alert show={props.showError} variant='danger'>
        <Alert.Heading>Explore Server Connection Error</Alert.Heading>
        <hr />
        <p>Explore results are not available</p>
      </Alert>
    </>
  )
}

export default ServerStatus;
