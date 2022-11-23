import React from "react";
import { useParams } from "react-router-dom";
import bikes from "../../api/Gallery.json";
import NotFound from "../NotFound/NotFound";
import classes from "./Bike.module.scss";

const Bike = () => {
  const { bikeName } = useParams();
  const bike = bikes.find(
    (b) => b.name.toLowerCase() === bikeName.toLowerCase()
  );

  const price = bike.price.toFixed(3);

  if (!bike) {
    return <NotFound />;
  }

  return (
    <section>
      <h2>{bike.name}</h2>
      <p>{bike.desc}</p>
      <div className={classes["bike-info"]}>
        <ul>
          <li>
            <em>model:</em> <strong>{bike.model}</strong>
          </li>
          <li>
            <em>brand:</em> <strong>{bike.brand}</strong>
          </li>
          <li>
            <em>year:</em> <strong>{bike.year}</strong>
          </li>
          <li>
            <em>power:</em> <strong>{bike.power}hp</strong>
          </li>
          <li>
            <em>price:</em> <strong>{price}eur</strong>
          </li>
          <li>
            <em>legal:</em> <strong>{bike.legal ? "Yes" : "No"}</strong>
          </li>
          <li>
            <em>cylinders:</em> <strong>{bike.cylinders}</strong>
          </li>
        </ul>
        <div className={classes["bike-img-container"]}>
          <img src={bike.image} alt={bike.name}/>
        </div>
      </div>
    </section>
  );
};

export default Bike;
