import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = (props) => {
  return <section>
    <Header/>
    <Body children={props.children} />
    <Footer/>
  </section>
};

export default Layout;