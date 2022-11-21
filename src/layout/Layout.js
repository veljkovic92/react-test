import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return <>
    <Header/>
    <Body children={props.children} />
    <Footer/>
  </>
};

export default Layout;