const LocationInfo = ( {  location   } ) => {


  return (
    <article id="cuadrado">
        <h2>{location?.name}</h2>
        <ul className>
            <li><span>Type: <br></br></span><span>{location?.type}</span></li>
            <li><span>Dimension: <br></br></span><span>{location?.dimension || 'unknom'}</span></li>
            <li><span>Population: <br></br></span><span>{location?.residents.length}</span></li>
        </ul>
    </article>
  )
}
   
export default LocationInfo