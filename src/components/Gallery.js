import bikes from "../pages/Gallery.json";
import classes from "./Gallery.module.scss";

const Gallery = () => {
  return Object.keys(bikes).map((bike) => {
    return (
      <section className={classes.gallery}>
      <h2>Our most sold bikes in 2022</h2>
        <div className={classes["bike-top"]}>
          <h2>
            {bikes[bike].brand} {bikes[bike].model}
          </h2>
          <p>Manufactured: {bikes[bike].year}</p>
        </div>

        <div className={classes["bike-bot"]}>
          <div className={classes["bike-info"]}>
            <p>Horse Power: {bikes[bike].power}</p>
            <p>{bikes[bike].legal ? "Street Legal" : "Race Only"}</p>
            <p>Price: {bikes[bike].price}</p>
          </div>
          <img src={bikes[bike].image}></img>
        </div>
      </section>
    );
  });
};

export default Gallery;
