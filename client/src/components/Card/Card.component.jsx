import "./Card.styles.css"
import {Link} from 'react-router-dom'

function Card(props) {



    return (
      <div className= "card-container">
        <div className="id">
        <h2>Id: {props.id}</h2>
        </div>
        
        <div className= "image">
        <img src={props.image} alt=""/>
        </div>

        <div className={"div"}>
          <h2>Nombre: {props.name}</h2>
        </div>
        <div>
          <h4>Peso: {props.weight}</h4>
        </div>
        <div>
          <h4>Temperamentos: {props.temperament}</h4>
        </div>
        <div>
          <Link to={`/detail/${props.id}`}>
          <button>Ver Detalles</button>
          </Link>
          
          
          
        </div>
      

        
      </div>
    );
  }
  
  export default Card;