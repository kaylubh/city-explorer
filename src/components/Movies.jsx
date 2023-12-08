// bootstrap
import Carousel from 'react-bootstrap/Carousel';
// components
import Movie from './Movie';

function Movies(props) {

  const movies = props.movieData ? props.moviesData.map((movie) =>
    <Carousel.Item key={movie.id}>
      <Movie movieData={movie} />
    </Carousel.Item>
  ) : null;

  return (
    props.moviesData ? (
      <>
        <h3>{props.cityName} Related Movies</h3>
        <Carousel>
          {movies}
        </Carousel>
      </>
    ) : null
  )
}

export default Movies;
