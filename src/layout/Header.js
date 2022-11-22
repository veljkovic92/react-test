import Menu from "../components/Menu";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <section className={classes.header}>
      <div>
        <Menu />
      </div>
    </section>
  );
};

export default Header;
