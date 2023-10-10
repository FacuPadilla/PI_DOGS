import './Detail.styles.css';
import { useEffect, useState } from "react";
import { useParams, useHistory} from "react-router-dom";
import axios from "axios";


function Detail() {
//aqui tuve q usar useHistory q hace casi lo mismo q useNavigate pero estoy con una version mas vieja de react-router-dom
const history = useHistory()
const GoBack = () => {
  history.goBack()
}
  //useParams para obtener el id de la url de detail
  const { id } = useParams();
  //Creo un Estado
  const [character, setCharacter] = useState({});
  //Este efecto se ejecutata cada vez q el estado character cambie(osea el dog) para obtener el dog q quiero
  useEffect(() => {
    axios(`http://localhost:3001/dogs/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay perro con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  return (
    <div>
      
      <h1 className="h1"> Estas en el detalle de {character.name}</h1>
      <div className="container">
        <div className="divs">
        <h2>ID: {character.id}</h2>
        </div>
        
        <h2>Nombre: {character.name}</h2>
        <img src={character.image} alt="" className="imagen"></img>
        <br></br>
        <div className="divs">
        <h2>Peso: {character.weight} Kg </h2>
        <h2>Altura: {character.height} </h2>
        <h2>Esperanza de vida: {character.life_span}</h2>
        <h2>Temperamentos: {character.temperament}</h2>
        {character.origin && <h2> Origen: {character.origin}</h2>}
        </div>
      </div>
      <br></br>
      <button onClick={GoBack} className="botonn">Volver</button>
    </div>
  );
}

export default Detail;