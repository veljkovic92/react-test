import { NavLink, useLocation } from "react-router-dom";
import classes from "./Menu.module.scss";

const Menu = () => {
  const location = useLocation();
  const onNavItemClickHandler = () => {};

  return (
    <section className={classes.menu}>
      <button
        onClick={() => {
          console.log(`You are at page: ${location.pathname}`);
        }}
      >
        Page name
      </button>
      <NavLink
        to="/home"
        activeClassName={classes.activeLink}
        className={classes.navLink}
        onClick={onNavItemClickHandler}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        activeClassName={classes.activeLink}
        className={classes.navLink}
        onClick={onNavItemClickHandler}
      >
        About
      </NavLink>
      <NavLink
        to="/gallery"
        activeClassName={classes.activeLink}
        className={classes.navLink}
        onClick={onNavItemClickHandler}
      >
        Gallery
      </NavLink>
      <NavLink
        to="/contact-us"
        activeClassName={classes.activeLink}
        className={classes.navLink}
        onClick={onNavItemClickHandler}
      >
        Contact Us
      </NavLink>
    </section>
  );
};

export default Menu;