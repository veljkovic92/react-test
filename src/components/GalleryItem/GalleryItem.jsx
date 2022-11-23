import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./GalleryItem.module.scss";

const GalleryItem = ({ bike }) => {
  const history = useHistory();
  
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
          <p>Horse Power: {bike.power}</p>
          <p>{bike.legal ? "Street Legal" : "Race Only"}</p>
          <p>Price: {bike.price}</p>
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
