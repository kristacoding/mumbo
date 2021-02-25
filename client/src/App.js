import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Container from "./components/Container/container"
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import SEODashboard from "./pages/Dashboard/dashboard";
import Profile from "./pages/Profilepage/profile";
import "./App.css";


function App() {
  
  return (
    <Router>
      <Nav />
      <Container>
        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path="/mumbo" component={Login} />
        <Route exact path="/seo-dashboard" component={SEODashboard} />
        <Route exact path={["/profile", "/profile/:id"]} component={Profile} />
      </Container>
    </Router>
  );
}

export default App;