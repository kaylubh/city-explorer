// bootstrap
import Image from 'react-bootstrap/Image';

function CityMap(props) {
  return (
    <>
      <Image src={props.source} alt={`map image of ${props.location.display_name}`} />
    </>
  )
}

export default CityMap;