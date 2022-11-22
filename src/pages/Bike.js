import React from "react";
import { useParams } from "react-router-dom";
import bikes from "./Gallery.json";
import NotFound from "./NotFound";

const Bike = () => {
  const {bikeName}  = useParams();
  const bike = bikes.find(b => b.name.toLowerCase() === bikeName.toLowerCase());

  if(!bike) {
    return <NotFound />
  }
  
  return (
    <section>
      <h1>{bike.name}</h1>
      <ul>
        <li>Model: {bike.model}</li>
        <li>Brand: {bike.brand}</li>
        <li>Year: {bike.year}</li>
        <li>Power: {bike.power}</li>
        <li>Price: {bike.price}</li>
        <li>Legal: {bike.legal ? 'Yes' : 'No'}</li>
      </ul>
      {/* <p>Neki duzi tekst o motoru</p>
      <p>Ubrzanje</p>
      <p>Max brzina</p>
      <p>Broj Cilindara</p>
      <p>Osovinsko rastojanje</p>
      <p>Potrosnja</p> */}
    </section>
  );
};

export default Bike;
