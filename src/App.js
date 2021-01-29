import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./Pages/Search";
import Form from "./Pages/Form";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/footer";
import Wrapper from "./components/Wrapper/Wrapper";
import Dashboard from "./Pages/dashboard";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper>
          <Route exact path="/mumbo" component={Search} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/seo-dashboard" component={Dashboard} />
          <Route exact path="/" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;