// bootstrap
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
// components
import Movie from './Movie';

function Movies(props) {

  const movies = props.moviesData.map((movie) => 
    <Carousel.Item key={movie.id}>
      <Movie movieData={movie} />
    </Carousel.Item>
  );

  return (
    <>
      <h3>{props.cityName} Related Movies</h3>
      <Carousel>
        {movies}
      </Carousel>
    </>
  )
}

export default Movies;
