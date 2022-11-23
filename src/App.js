import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Layout from "./layout/Layout/Layout";
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import NotFound from "./pages/NotFound/NotFound";
import Bike from "./pages/Bike/Bike";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/gallery" exact>
          <Gallery />
        </Route>
        <Route path="/gallery/:bikeName">
          <Bike />
        </Route>
        <Route path="/contact-us" exact>
          <ContactUs />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
