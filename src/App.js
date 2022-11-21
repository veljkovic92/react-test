import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Layout from "./layout/Layout";
import About from "./pages/About";

function App() {
  return (
   <Layout>
    <About/>
   </Layout>
  );
}

export default App;
