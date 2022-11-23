import { useHistory, useLocation } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import classes from "./Header.module.scss";

const Header = () => {
  const location = useLocation();
  const history = useHistory();

  const onTitleClickHandler = () => {
    history.push("/home");
  }
  
  return (
    <section className={classes.header}>
      <div className={classes.left}>
        <h1 onClick={onTitleClickHandler}>Moto World</h1>
      </div>
      <div className={classes.mid}>
       
        <button
        className={classes.pageNameBtn}
          onClick={() => {
            console.log(`You are at page: ${location.pathname}`);
          }}
        >
          Page name
        </button>
      </div>
      <div className={classes.right}>
        <Menu />
      </div>
    </section>
  );
};

export default Header;
