import "./SearchBar.styles.css"
import {Link} from "react-router-dom"
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import {getDogsbyName, clearDogs, getDogs} from "../../redux/actions/index"

function SearchBar() {

  const [name, setName] = useState("");
  
  const dispatch = useDispatch();
  const dogs = useSelector((state)=> state.allDogs)
  
//actualizo el estado local de forma dinamica
  const handleChange = (event)=> {
    event.preventDefault();

    let input = event.target.value;

    setName(input)
  }
  //funcion para mi boton buscar utilizando el dipsatch para traer mi funcion del store
  //función onSearch, utilizo el valor actualizado de name (el valor del input) al hacer la búsqueda de perros por nombre:
  const onSearch =  ()=> {
    dispatch(getDogsbyName(name))
    
     
  }
  //funcion para mi boton para q reinicie el estado global y me devuelva todso los dogs
  const reset = ()=> {
    
      dispatch(getDogs());
  

  }
  

   


    return (
      <div className="contenedor">
        
            <input
            type="text"
            placeholder="Busqueda"
            className="input"
            value={name}
            onChange={handleChange}

              />
            <button className="search" onClick={onSearch}>Buscar</button>
            
            <Link to="/form">
        <button className="search">
          Create Dog
          </button>
          </Link>
          <button className="search" onClick={reset}>
            Reset
          </button>
        
      </div>
    );
  }
  
  export default SearchBar;