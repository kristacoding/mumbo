import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "../src/Pages/search";
import Form from "../src/Pages/form";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/footer";
import Container from "./components/Container/container"
import SEODashboard from "./Pages/dashboard";
var auth = require('./routes/auth');

function App() {

  app.use('/api/auth', auth);
  
  return (
    <Router>
        <Nav />
          <Container>
          <Route exact path="/mumbo" component={Search} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/seo-dashboard" component={SEODashboard} />
          <Route exact path="/" component={Search} />
          </Container>
          <Footer/>
    </Router>
  );
}

export default App;