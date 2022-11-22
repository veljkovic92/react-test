import classes from "./Body.module.scss";

const Body = (props) => {
  return <section className={classes.body}>{props.children}</section>;
};

export default Body;
