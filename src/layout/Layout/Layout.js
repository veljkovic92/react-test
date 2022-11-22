import classes from "./Layout.module.scss"
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = (props) => {
  return <section className={classes.layout}>
    <Header/>
    <Body children={props.children} />
    <Footer/>
  </section>
};

export default Layout;