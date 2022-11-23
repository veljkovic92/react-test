import classes from "./Home.module.scss";
import bikes from "./Gallery.json";

const Home = () => {

  const lastFour = bikes.slice(bikes.length-4, bikes.length);
  
  const lastFourMap = lastFour.map(bike => {
    return <div>
      <h2>{bike.name}</h2>
      <p>{bike.price}</p>
      <img>{bike.image}</img>
    </div>
  })

   

  return (
    <section className={classes.home}>
      <img src="../assets/images/rocket3.jpg"></img>
      <p>We are the group of people that sleep on the motorcycles. Yes, trully... With the experience of more than 20 years, lot's of motorcycles came and went by us. The main focus is to sell new bikes, find great used ones and refurbish the older models. With the evolution of motorcycles comes the bigger demand for electronical aids and better sound (since new regulations ruin the fun). On this website we show off every month what are the most required and sold motorcycles at current date. Be sure to hang around and contact us for more information...</p>
    </section>
  );
};

export default Home;
