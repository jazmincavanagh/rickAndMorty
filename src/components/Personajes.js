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
        if(this.state.color===this.state.colorOriginal){
            this.setState({color: colorNuevo})
        }
        else {
            this.setState({color: this.state.colorOriginal})
              }
        }

    seleccionarPersonaje(nuevoColor){
     
       
            this.setState({color: nuevoColor})
        
      
        }
    
    render(){
    return (
        <div className={"uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid"} >
            <div className="card-body" onMouseEnter={this.cambiarColor.bind(this, "black")} onMouseLeave={this.cambiarColor.bind(this, this.state.color)} style={{backgroundColor: this.state.color}}>
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
        <button className="cambiarColor" onClick={this.seleccionarPersonaje.bind(this, "green")} >
            Cambiar Color
        </button>
        <button className="borrar" onClick={this.props.onDelete.bind(this, this.props.id)} >
            Borrar
        </button>
        </div>
        </div>
    )
    }
}
export default Personajes