// bootstrap
import Alert from 'react-bootstrap/Alert';

function ErrorAlert(props) {

  const show = Object.keys(props.errorMessage).length > 0

  return (
    <Alert show={show} variant='danger'>
      <Alert.Heading>Error</Alert.Heading>
      <hr />
      <p>{props.errorMessage.code}</p>
      <p>{props.errorMessage.message}</p>
    </Alert>
  )
}

export default ErrorAlert;