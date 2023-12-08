// bootstrap
import Card from 'react-bootstrap/Card';

function Movie(props) {
  return (
    <Card>
      <Card.Img variant='top' src={props.movieData.imageSrc} />
      <Card.Body>
        <Card.Title>{props.movieData.title}</Card.Title>
        <Card.Text>{props.movieData.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Movie;
