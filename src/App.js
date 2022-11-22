import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./components/Gallery";
import Layout from "./layout/Layout";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

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
