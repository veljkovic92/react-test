import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Gallery from "./components/Gallery";
import Layout from "./layout/Layout";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
   <Layout>
    <About/>
    <Gallery/>
    <ContactUs/>
   </Layout>
  );
}

export default App;
