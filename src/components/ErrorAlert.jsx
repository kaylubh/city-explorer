// bootstrap
import Alert from 'react-bootstrap/Alert';

function ErrorAlert(props) {
  return (
    <Alert show={props.show} variant='danger'>
      <Alert.Heading>
        Error:
      </Alert.Heading>
    </Alert>
  )
}

export default ErrorAlert;