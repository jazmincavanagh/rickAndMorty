import arrayPersonajes from '../rickandmorty.json'
import Personajes from './Personajes'
import { Component } from 'react';

class Tarjetas extends Component{
   constructor(){
       super();
        this.state ={
            personajes: arrayPersonajes,
            
       }
   } 
    borrarPersonaje(idPersonaje){
        
        console.log("tarjeta a borrar: " + idPersonaje)
    }

    render(){
    return (      
        <div className="container-fluid">
            <button className="reset"> Reset </button>
        <div className="row">
        {
            this.state.personajes.map((personaje, idx)=>{
                return(
                    <div className="col-md-4" >
                    <Personajes key={idx} datosPersonaje = {personaje} color="white" onDelete={this.borrarPersonaje.bind(this)} id={personaje.id}/>
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