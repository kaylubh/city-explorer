// bootstrap
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Movies(props) {

  return (
    <>
      <h3>Movies Related to {props.cityName}</h3>
      <Row>
        {props.moviesData.map((movie) =>
          <Col key={movie.id}>
            <Card>
              <Card.Img variant='top' src={movie.imageSrc} alt={movie.title} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </>
  )
}

export default Movies;
