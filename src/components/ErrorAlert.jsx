// bootstrap
import Alert from 'react-bootstrap/Alert';

function ErrorAlert(props) {
  return (
    <Alert show={props.show} variant='danger'>
      <Alert.Heading>Error</Alert.Heading>
      <hr />
      <p>{props.errorMessage.code}</p>
      <p>{props.errorMessage.message}</p>
    </Alert>
  )
}

export default ErrorAlert;