import { useState } from 'react';
import './Form.styles.css';


function Form() {

const [form, setForm]= useState({
  Nombre: "",
  imagen: "",
  Altura: "",
  Peso: ""
})




const changeHandler= (event)=> {
  const property = event.target.name;
  const value = event.target.value;

  setForm({...form, [property]:value})
  


}

  return (
    
    <div className ="hola">
      <h1>Crea tu propia Raza</h1>
   <form>
    <div>
    <label>Nombre: </label>
    <input type="text" value={form.Nombre} onChange={changeHandler} name="Nombre"/>
    </div>
    <div>
    <label>Imagen: </label>
    <input type="text" value={form.imagen} onChange={changeHandler} name="imagen"></input>
    </div>
    <div>
    <label>Altura: </label>
    <input type="text" value={form.Altura} onChange={changeHandler} name="Altura"></input>
    </div>
    <div>
    <label>Peso: </label>
    <input type="text" value={form.Peso} onChange={changeHandler} name="Peso"></input>
    </div>
    
   
   </form>
   </div>
  );
}

export default Form;