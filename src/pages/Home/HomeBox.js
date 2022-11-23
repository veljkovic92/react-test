import bikes from "../../api/Gallery.json";
import { useHistory } from "react-router-dom";
import classes from "./HomeBox.module.scss";

const HomeBox = () => {
  const history = useHistory();
  const lastFour = bikes.slice(bikes.length - 4, bikes.length);

  const onBikeClickHandler = (bikeName) => {
    history.push(`/gallery/${bikeName}`);
  };

  return lastFour.map((bike, index) => {
    return (
      <div
        className={classes["bike-box"]}
        onClick={() => onBikeClickHandler(bike.name)}
        key={`bike-${index}`}
      >
        <div className={classes["box-content"]}>
          <h4>{bike.name}</h4>
          <div
            className={classes.image}
            style={{ background: `url("${bike.image}")` }}
          ></div>
        </div>
      </div>
    );
  });
};

export default HomeBox;
