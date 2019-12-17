import React, {Componet, Component} from "react"; 

class Navbar extends Component {

    render(){
        return(
            <nav className="Navbar"  class="navbar navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1">RunBikers</span>
                <h2 className="badge-secondary bg-dark">Inicia el viaje <span class="badge-badge-secondary bg-dark">¡Vamos!</span></h2>
            </nav>
            
            
        );
    }
}

export default Navbar; 


