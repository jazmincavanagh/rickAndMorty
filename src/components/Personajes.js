function Personajes(props){
 

    return (
        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-grid">
            <div className="card-body">
        <img src={props.datosPersonaje.image}></img>
        <h3>{props.datosPersonaje.name}</h3>
        <ul>
            <li>
            {props.datosPersonaje.status}
            </li>
            <li>
            {props.datosPersonaje.species}
            </li>
            <li>
            Origin: {props.datosPersonaje.origin.name}   
            </li>
        </ul>
        </div>
        </div>
    )



}

export default Personajes