import React, { Component } from "react"; 
import "./Styles/Carrusel.css"


class Carrusel extends Component {

    render(){
        return(
            <div className="Body"> 
            <img className="imagen2" src="https://static4.depositphotos.com/1001165/366/v/950/depositphotos_3660819-stock-illustration-motorcycle-and-bikers-silhouettes.jpg"></img>
            <img className="imagen" src="https://i.imgur.com/mFYuTW3.png"></img>
            <h3 className="titulo2">Nuestro proposito con esta pagina es que conozcas mas afondo el servicio</h3>
             

            <div className="Carrusel">
              <div>
              <div class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                  <img className="image" src="https://www.moto1pro.com/sites/default/files/honda-cb-650r-2019-20_0.jpg" class="d-block w-100  col-md-12  " width="1000px" height="500px" alt="Motocicleta de transportando"/>
              </div>
              <div class="carousel-item">
                <img className="image" src="https://www.soymotero.net/sites/default/files/styles/max_width_1200px/public/2018-11/pasajero_en_moto_benelli_ok_01.jpg?itok=zofZTCO8" class="d-block w-100 col-12 " width="1000px" height="500px" alt="Motoneta con pasajero"/>
              </div>
              <div  class="carousel-item">
                <img className="image" src="https://motorizados.club/wp-content/uploads/2018/12/%C2%BFPor-qu%C3%A9-las-motos-son-la-mejor-manera-de-transporte-en-una-ciudad...jpg" class="d-block w-100 col-12 " width="1000px" height="500px" alt="Motociclista trasnportando a un pasajero"/>
              </div>
            </div>
          </div>
              </div>
            </div>

            </div>


                        
        );
    }

}

export default Carrusel; 

           







