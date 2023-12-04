// css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// react

// bootstrap
import Container from 'react-bootstrap/Container';
// components
import CityInput from './components/CityInput';

function App() {

  function getLatLong(cityName) {
    alert(cityName);
  }

  return (
    <Container>
    
      <CityInput onExplore={getLatLong} />

    </Container>
  )
}

export default App
