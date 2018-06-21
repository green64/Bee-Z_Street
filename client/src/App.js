import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Search from "./pages/search";
import Garden from "./pages/garden";
import Contact from "./pages/contact";
import Wrapper from "./components/Wrapper";
import "./App.css";

const App = () => (
<div>
  <Wrapper>
    <Router>
      <div> 
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/garden" component={Garden} />
      <Route exact path="/contact" component={Contact} />
      </div>   
    </Router>
    </Wrapper>
    <Footer> 
    <h3>Bee-Z Street &copy; 2018</h3>
  </Footer>

</div>
);

export default App;
