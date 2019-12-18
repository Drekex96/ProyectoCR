import React, {Component} from "react"
import "./Styles/footer.css"

class footer extends Component{
    render(){
        return( 
        
          <div className="footer">
            <h2 className="Subtema" font-family="cursive" >Este es un servicio de tranporte rapido, efectivo y economico</h2>
                     
            <div>
            <footer class="page-footer font-small pt-4">
              
                     <div className="container-fluid text-center text-md-left">
                       </div>
                       
                     
                       
                        <div className="row">
                    
                        
                          <div class="col-md-3 mt-md-0 mt-3">
                    
                            <div className="colum1">
                            <h5 class="text-uppercase">Gracias por visitarnos</h5>
                            <p>Para mas informacion consulte nuestras sedes mas cercanas.</p>
                            </div>
                          </div>
                          
                    
                          <hr class="clearfix w-100 d-md-none pb-3"/>
                    
                          
                          <div class="col-md-3 mb-md-0 mb-3">
                    
                            <div class="colum2">
                            <h5 class="text-uppercase">Links Directos</h5>
                    
                            <ul class="list-unstyled">
                              <li>
                                <a href="#!">.Visita Nuestras Redes Sociales</a>
                              </li>
                              <li>
                                <a href="#!">.Mas Informacion</a>
                              </li>
                            </ul>
                            </div>
                    
                          </div>
                          
                            <div className="colum3">
                            <h5 class="text-uppercase" >¡Mas Links!</h5>
                    
                            <ul class="list-unstyled">
                              <li>
                                <a href="#!" >Ubicanos</a>
                              </li>
                              <li>
                                <a href="#!">Contactanos</a>
                              </li>
                            </ul>
                            </div>
                            </div>
                            
                      
                      
                      <div className="FinalDeFooter" class="footer-copyright text-center col-md-12 py-3">© 2018 Copyright:
                        <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
                      </div>
                      </footer>



            </div>
            
          </div>
 
         );
    }
}

export default footer; 



