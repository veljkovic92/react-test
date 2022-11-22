import classes from "./NotFound.module.scss";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  const onRedirectHandler = () => {
    history.replace("/home");
  };

  return (
    <div className={classes["not-found"]}>
      <h2 className={classes["not-found"]}>Sorry, this page doesn't exist!</h2>
      <p>Please click on the button below to go to "Home" page</p>
      <button onClick={onRedirectHandler}>Back to Home</button>
    </div>
  );
};

export default NotFound;
