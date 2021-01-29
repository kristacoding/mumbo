import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "../src/Pages/search";
import Form from "../src/Pages/form";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/footer";
import Wrapper from "./components/Wrapper/Wrapper";
import SEODashboard from "./Pages/dashboard";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper>
          <Route exact path="/mumbo" component={Search} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/seo-dashboard" component={SEODashboard} />
          <Route exact path="/" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;