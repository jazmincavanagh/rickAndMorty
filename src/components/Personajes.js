import { Component } from 'react';

class Personajes extends Component{
    constructor(props) {
        super(props);
        this.state = {
            colorOriginal: this.props.color,
            color: this.props.color
            }
        }
    
        cambiarColor(colorNuevo){
            console.log("Cambio color a " + this.state.color);
        if(this.state.color===this.state.colorOriginal){
            this.setState({color: colorNuevo})
        }
        else {
            this.setState({color: this.state.colorOriginal})
              }
        }
    render(){
    return (
        <div className={"uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid"} style={{backgroundColor:this.state.color}} onMouseEnter={this.cambiarColor.bind(this, "yellow")}>
            <div className="card-body">
        <img src={this.props.datosPersonaje.image}/>
        <h3>{this.props.datosPersonaje.name}</h3>
        <ul>
            <li>
            {this.props.datosPersonaje.status}
            </li>
            <li>
            {this.props.datosPersonaje.species}
            </li>
            <li>
            Origin: {this.props.datosPersonaje.origin.name}   
            </li>
        </ul>
        <button className="cambiarColor" onClick={this.cambiarColor.bind(this, "green")}>
            Cambiar Color
        </button>
        <button className="borrar" >
            Borrar
        </button>
        </div>
        </div>
    )
    }



}

export default Personajes