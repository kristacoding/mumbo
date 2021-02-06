import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "../src/Pages/search";
import Form from "../src/Pages/form";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/footer";
import Container from "./components/Container/container"
import Login from "./Pages/Login/login"; 
import Register from "./Pages/Register/register";
import SEODashboard from "./Pages/dashboard";
import "./App.css"

function App() {

  return (
    <Router>
      <Nav />
      <Container>
        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path="/mumbo" component={Search} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/seo-dashboard" component={SEODashboard} />
        <Route exact path="/search" component={Search} />
      </Container>
      <Footer />
    </Router>
  );
}

export default App;