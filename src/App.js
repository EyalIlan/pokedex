import React, { Component } from "react";
import {HashRouter as Router,Route,Switch} from 'react-router-dom'

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./Components/layout/NavBar";
import Dashboard from "./Components/layout/Dashboard";
import backgroundImage from './pattern.png'


import Pokemon from './Components/pokemon/Pokemon'

class App extends Component {
 
  render(){
  return (
    <Router>
    <div className="App" style ={{background:`url(${backgroundImage})`}}>
      <NavBar />
      <div className="container">
        <Switch>
        <Route exact path="/" component ={Dashboard} />
        <Route exact path="/Pokemon/:pokemonIndex" component ={Pokemon} />
        </Switch>
      </div>
    </div>
    </Router>
  );
  }
}

export default App;


