import arrayPersonajes from '../rickandmorty.json'
import Personajes from './Personajes'
function Tarjetas(){
 

    return (
        
        <div className="container-fluid">
        <div className="row">
        {
            arrayPersonajes.map(function(personaje, idx){
                return(
                    <div className="col-md-4">
                    <Personajes key={idx} datosPersonaje = {personaje} />
                    </div>
                )
            })
        }
        </div>
        </div>
    )



}

export default Tarjetas