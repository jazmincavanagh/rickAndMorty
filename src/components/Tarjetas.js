import arrayPersonajes from '../rickandmorty.json'
import Personajes from './Personajes'
import { Component } from 'react';

class Tarjetas extends Component{
    
    borrar(){

    }

    render(){
    return (      
        <div className="container-fluid">
            <button className="reset"> Reset </button>
        <div className="row">
        {
            arrayPersonajes.map(function(personaje, idx){
                return(
                    <div className="col-md-4" >
                    <Personajes key={idx} datosPersonaje = {personaje} colorOriginal="pink"/>
                    </div>
                )
            })
        }
        </div>
        </div>
    )
    }

    



}

export default Tarjetas