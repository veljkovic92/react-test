import bikes from "../pages/Gallery.json";

const Gallery = () => {
  

  return (
    Object.keys(bikes).map(bike => {
      return (
        <div>
          <h2>{bikes[bike].brand} {bikes[bike].model}</h2>
          <p>{bikes[bike].year}</p>
          <p>{bikes[bike].power}</p>
          <p>{bikes[bike].price}</p>
          <p>{bikes[bike].year}</p>
          <img src={bikes[bike].image}></img>
        </div>
      )
    })
  )
}

export default Gallery;