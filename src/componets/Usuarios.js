import React, { Component } from "react"
import { object } from 'prop-types';
import axios from 'axios';

class Usuarios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            edad: '0',
            sexo: 'M',
            nacionalidad: 'MX',
            codigo_postal: '',
        }
    }

    onChangeInput = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        this.setState({
            [key]: value
        })
    }
    onClickSubmit = (e) => {
        e.preventDefault(); //evita que recargue al dar en guardar
        console.log(this.state);
        const URL = 'https://proyecto-roja-b36.herokuapp.com/usuario'
        axios.post(URL, this.state)
        .then((result) => {
            console.log(result);
            alert('usuario creado correctamente');
        }).catch((err) => {
            console.log(err);
            alert('usuario no creado');
        });
    }


    render() {
        return (
            <div>
            <form onSubmit={this.onClickSubmit}>
   <div class="form-row">
    <div class="col-md-4 mb-3">
      <label>Nombre</label>
      <input id='nombre' type='text' onChange={this.onChangeInput} value={this.state.nombre}> </input>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label>Edad</label>
      <input id='edad' type='text' onChange={this.onChangeInput} value={this.state.edad}></input>
    </div>
    <div class="col-md-4 mb-3">
      <label>Sexo</label>
        <input id='sexo' type='text' onChange={this.onChangeInput} value={this.state.sexo}></input>
      </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label>Nacionalidad</label>
      <input id='nacionalidad' type='text' onChange={this.onChangeInput} value={this.state.nacionalidad}></input>
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label>Codigo postal</label>
      <input id='codigopostal' type='text' onChange={this.onChangeInput} value={this.state.codigopostal}></input>
      </div>
  <button type="submit">Enviar</button>
</form>
</div>
           
);
};};
                                
                                
export default Usuarios;