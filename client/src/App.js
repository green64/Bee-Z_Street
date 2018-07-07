import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Search from "./pages/search";
import Garden from "./pages/garden";
import Contact from "./pages/contact";
import PlantInfo from "./pages/plantInfo";
import Login from "./pages/login";
import { Navbar, NavItem } from "react-materialize";

import "./App.css";

const App = () => (
<Wrapper className="Site">
  <Router>
    <div className="Site-content">
    <Navbar brand="Bee-Z Street" right  className={
            window.location.pathname === "/login" ||  window.location.pathname === "/"
              ? "hide"
              : "#f9a825 yellow darken-3"
          }> 
      <NavItem href="/search" className={
            window.location.pathname === "/search"
              ? "nav-item active"
              : "nav-item navbar"
          }>Search</NavItem>
      <NavItem href="/garden" className={
            window.location.pathname === "/garden"
              ? "nav-item active"
              : "nav-item navbar"
          }>Garden</NavItem>
      <NavItem href="/contact" className={
            window.location.pathname === "/contact"
              ? "nav-item active"
              : "nav-item navbar"
          }>Contact</NavItem>
      <NavItem href="/login" className="nav-item navbar">Log Out</NavItem>
    </Navbar>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/garden" component={Garden} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/search/:id" component={PlantInfo} />
      </div>
  </Router>
  <Footer> 
  <h3>Bee-Z Street &copy; 2018</h3>
</Footer>
</Wrapper>
);

export default App;
