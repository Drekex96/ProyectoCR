import React, {Componet, Component} from "react"; 

class Navbar extends Component {

    render(){
        return(
            <nav className="Navbar"  class="navbar navbar-dark bg-dark">
                         <div className="dropdown">
  <button class="buttom" class="btn  btn-secondary  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Registro
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Usuarios</a>
    <a class="dropdown-item" href="#">Conductores</a>

  </div>
  </div>
  <nav className="titulo">
  <span class="navbar-brand mb-h1">RunBikers</span>
  </nav>   
  <h2 className="Texto" class="badge-secondary bg-dark">Inicia el viaje <span class="badge-badge-secondary bg-dark">¡Vamos!</span></h2>
  </nav>
            
            
        );
    }
}

export default Navbar; 


