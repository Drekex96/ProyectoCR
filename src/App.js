import "bootstrap/dist/css/bootstrap.min.css"
import $ from "jquery";
//import  Pooper from "poopers.js"; 
import "bootstrap/dist/js/bootstrap.bundle.min"
import React, { Component } from 'react';
import './App.css';
import Navbar from "./componets/Navbar";
import Usuarios from "./componets/Usuarios"; 
import Carrusel from "./componets/Carrusel";
import Footer from "./componets/footer";





class App extends Component {
  render(){
    return(
      <div>
        <Navbar />
      <div className="container">
        <Usuarios />
      </div>
      <Carrusel />
      <div>
      <Footer /> 
      <div>
        
      </div> 

      </div>
      </div>
    );
    
  }
}




export default App;
