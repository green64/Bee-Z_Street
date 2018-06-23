import React, { Component } from "react";
import "../css/home.css";
import API from "../utils/API";
import Main from "../components/Main";
import PlantCard from "../components/PlantCard";

class Search extends Component {
  state = {
    plants: []
  }

  componentDidMount() {
    this.loadPlants();
  }

  loadPlants = () => {
    API.getPlants()
      .then(res =>
        this.setState({ plants: res.data })
      ).catch(err => console.log(err));
  };

  render() {
    return (  
    <Main>
      <h2>It's a Search</h2>
  {this.state.plants.length ? (
    <ul class="collection">
    {this.state.plants.map(plant => (
      <PlantCard 
        image = {plant.images.proportional}
        commonName = {plant.commonName}
        name = {plant.name}
        notes= {plant.notes}
      />
    ))}
    </ul>
  ) : (
    <h3>No Results to Display</h3>
  )}
      
    </Main>)
  }
}

export default Search;