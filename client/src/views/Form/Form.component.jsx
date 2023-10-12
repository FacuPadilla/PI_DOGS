import { useState } from 'react';
import axios from 'axios';
import {  useHistory} from "react-router-dom";
import './Form.styles.css';


function Form() {

  const history = useHistory()
const GoBack = () => {
  history.goBack()
}
//CREO ESTADO PARA LOS INPUTS
const [form, setForm]= useState({
  Nombre: "",
  imagen: "",
  AlturaMax: "",
  AlturaMin: "",
  PesoMax: "",
  PesoMin: "",
  life_span: "",
  Temperamentos:[]
})
//creo este estado y lo iniciliazo en false para renderizar el formulario y cuando sea true renderizar un msj de perro creado
const [perroCreado, setperroCreado] = useState(false);


//Estado de los errores q los inicializo con ese mensaje y a medida q alguien escribe en el input cambian
const [error, setError]= useState({
  Nombre: "",
  imagen: "",
  AlturaMax: "",
  AlturaMin: "",
  PesoMax: "",
  PesoMin: "",
  life_span: "",
  Temperamentos:""
})
//funcion q valida la informacion de mis inputs
const validate = (input) => {
  let newErrors = { ...error }; // Copia del objeto de errores existente

  // Validación para el nombre
  if (input.Nombre.length < 3) {
    newErrors = { ...newErrors, Nombre: "El nombre es muy corto" };
  } else {
    newErrors = { ...newErrors, Nombre: "" };
  }

  // Validación para la altura máxima
 // aca utilizo el isNaN y parseFloat ya que el valor de mi height es un string de un numero y no un numero en si
  if (isNaN(parseFloat(input.AlturaMax)) ) {
    newErrors = { ...newErrors, AlturaMax: "Debe ser un número" };
  } else {
    newErrors = { ...newErrors, AlturaMax: "" };
    
  }

  // Validación para la altura mínima
  if (isNaN(parseFloat(input.AlturaMin)) ) {
    newErrors = { ...newErrors, AlturaMin: "Debe ser un número" };
  } else {
    newErrors = { ...newErrors, AlturaMin: "" };
  }
   // Validación para la imagen (debe ser una URL)
   const urlvalida = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
   if (!urlvalida.test(input.imagen)) {
     newErrors = { ...newErrors, imagen: "Debe ser una URL válida" };
   } else {
     newErrors = { ...newErrors, imagen: "" };
   }

  setError(newErrors);
};





const changeHandler= (event)=> {
  const property = event.target.name;
  const value = event.target.value;
  //SPREAD OPERAOT PARA Q NO SE PISEN LOS ESTADOS DE LOS INPUTS
  setForm({...form, [property]:value})

  validate({...form, [property]:value}
  )
}
//creo el handle submit para mi form
const handleSubmit = async (e)=> {
e.preventDefault();
//Hago esta validacion aparte para que el formulario solo se mande si hay minimo un name y temperament

try {
  let DogNuevo = {
    name: form.Nombre,
    image: form.imagen,
    weight: `${form.PesoMin} - ${form.PesoMax}`,
    height: `${form.AlturaMin} - ${form.AlturaMax}`,
    life_span: form.life_span,
    temperament: form.Temperamentos

  }
  const respuesta = await axios.post(`http://localhost:3001/dogs`, DogNuevo)

  //hago mas validaciones en mi input, aca utilizo el isNaN y parseFloat ya que el valor de mi height es un string de un numero y no un numero en si
  if(isNaN(parseFloat(respuesta.data.height)) || isNaN(parseFloat(respuesta.data.weight)) ) {
    return window.alert("Las alturas y pesos deben ser numeros")
//si se creo el perro correctamente cambio el estado a true
  } else if (!/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(respuesta.data.image)){
    return window.alert("La URL ingresada no es valida")
  } else {
    setperroCreado(true)
  }
  //devuelvo una alerta si hay un error
} catch (error) {
  window.alert(`Debe completar todos los campos`)
  
}

}

  return (
    //valido si el estado perroCreado es false renderizo el form para crear perro
    <div>
    <div className ="hola">
      <h1>Crea tu propia Raza</h1>
     { perroCreado === false ?
   <form onSubmit={handleSubmit}>
    <div>
    <label>Nombre: </label>
    <span className="error">{error.Nombre}</span>
  
    <input type="text" value={form.Nombre} onChange={changeHandler} name="Nombre" placeholder="Ingrese un Nombre"/>
    
    </div>
    <div>
    <label>Imagen: </label>
    <span className="error">{error.imagen}</span>
    <input placeholder="Ingrese una URL" type="text" value={form.imagen} onChange={changeHandler} name="imagen"></input> 
    
    </div>
    <div>
    <label>Altura Maxima: </label>
    <span className="error">{error.AlturaMax}</span>
    
    <input placeholder="Ingrese altura max" type="text" value={form.AlturaMax} onChange={changeHandler} name="AlturaMax"></input>
    </div>
    <div>
    <label>Altura Minima: </label>
    <span className="error">{error.AlturaMin}</span>
    <input placeholder="Ingrese altura min" type="text" value={form.AlturaMin} onChange={changeHandler} name="AlturaMin"></input>
    </div>
    <div>
    <label>Peso Maximo: </label>
    <input placeholder="Ingrese peso max" type="text" value={form.PesoMax} onChange={changeHandler} name="PesoMax"></input>
    </div>
    <div>
    <label>Peso Minimo: </label>
    <input placeholder="Ingrese peso min" type="text" value={form.PesoMin} onChange={changeHandler} name="PesoMin"></input>
    </div>
    <div>
    <label>Esperanza de Vida: </label>
    <input placeholder="Ingrese Esperanza de vida" type="text" value={form.life_span} onChange={changeHandler} name="life_span"></input>
    </div>
    <div>
    <label>Temperamentos: </label>
    <input placeholder="Ingrese Temperamentos" type="text" value={form.Temperamentos} onChange={changeHandler} name="Temperamentos"></input>
    </div>
    
   <button type="submit"> Crear Perro</button>
   </form> : <h1 className="perrocreado">¡Tu raza fue creada exitosamente!</h1>}
   </div>
   <br></br>
   <button onClick={GoBack} className="botonn">Volver</button>

   </div>
  );
}

export default Form;