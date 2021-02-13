import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/footer";
import Container from "./components/Container/container"
import Login from "./Pages/Login/login"; 
import Register from "./Pages/Register/register";
import SEODashboard from "./Pages/Dashboard/dashboard";
import Logout from "./Pages/Logout/logout";
import Profile from "./Pages/Profilepage/profile";
import "./App.css";

function App() {

  return (
    <Router>
      <Nav />
      <Container>
        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path="/mumbo" component={SEODashboard} />
        <Route exact path="/seo-dashboard" component={SEODashboard} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/logout" component={Logout} />
      </Container>
      <Footer />
    </Router>
  );
}

export default App;