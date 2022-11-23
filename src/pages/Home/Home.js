import classes from "./Home.module.scss";
import HomeBox from "./HomeBox";

const Home = () => {
  return (
    <section className={classes.home}>
      <img src="./assets/images/rocket3.jpg" alt="Home Banner"></img>
      <p>
        We are the group of people that sleep on the motorcycles. Yes, trully...
        With the experience of more than 20 years, lot's of motorcycles came and
        went by us. The main focus is to sell new bikes, find great used ones
        and refurbish the older models. With the evolution of motorcycles comes
        the bigger demand for electronical aids and better sound (since new
        regulations ruin the fun). On this website we show off every month what
        are the most required and sold motorcycles at current date. Be sure to
        hang around and contact us for more information...
      </p>
      <div className={classes["bike-boxes"]}>
        <HomeBox />
      </div>
    </section>
  );
};

export default Home;
