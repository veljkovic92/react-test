import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./GalleryItem.module.scss";

const GalleryItem = ({ bike }) => {
  const history = useHistory();
  const price = bike.price.toFixed(3);
  console.log(price);

  return (
    <div className={classes.bike}>
      <div className={classes["bike-top"]}>
        <h2>
          {bike.brand} {bike.model}
        </h2>
        <p>Manufactured: {bike.year}</p>
      </div>
      <div className={classes["bike-bot"]}>
        <div className={classes["bike-info"]}>
          <p>Horse Power: {bike.power}hp</p>
          <p>{bike.legal ? "Street Legal" : "Race Only"}</p>
          <p>Price: {price}eur</p>
        </div>
        <img
          alt={bike.name}
          src={bike.image}
          onClick={() => {
            history.push(`/gallery/${bike.name}`);
          }}
        />
      </div>
    </div>
  );
};

export default GalleryItem;
