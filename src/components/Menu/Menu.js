import { NavLink } from "react-router-dom";
import classes from "./Menu.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Menu = () => {
  const onNavItemClickHandler = () => {};
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  let location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpened(false);
  }, [location]);

  return (
    <>
      <section className={classes.menu}>
        <button
          className={`${classes.burger} ${
            isMobileMenuOpened ? classes.burgerActive : ""
          }`}
          onClick={() => setIsMobileMenuOpened((prev) => !prev)}
        >
          <GiHamburgerMenu />
        </button>
        <div
          className={`${classes.links} ${
            isMobileMenuOpened ? classes.linksActive : ""
          }`}
        >
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
        </div>
      </section>
    </>
  );
};

export default Menu;
