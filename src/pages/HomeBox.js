import bikes from "./Gallery.json";
import { useHistory } from "react-router-dom";
import classes from "./HomeBox.module.scss";

const HomeBox = () => {
  const history = useHistory();
  const lastFour = bikes.slice(bikes.length - 4, bikes.length);

  const onBikeClickHandler = (event) => {
    
  };

   

  return lastFour.map((bike, index) => {
    return (
      <div
        className={classes["bike-box"]}
        onClick={onBikeClickHandler}
        key={`bike-${index}`}
      >
        <div className={classes["box-content"]}>
          <h4>{bike.name}</h4>
          <img src={bike.image}></img>
        </div>
      </div>
    );
  })
};

export default HomeBox;
