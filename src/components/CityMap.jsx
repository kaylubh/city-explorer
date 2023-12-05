// bootstrap
import Image from 'react-bootstrap/Image';

function CityMap(props) {
  return (
    <>
      <Image
      src={`https://maps.locationiq.com/v3/staticmap?key=${props.API_KEY}&center=${props.location.lat},${props.location.lon}&zoom=12`}
      alt={`map image of ${props.location.display_name}`}
      />
    </>
  )
}

export default CityMap;