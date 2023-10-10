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
  

  const handleChange = (event)=> {
    event.preventDefault();

    let input = event.target.value;

    setName(input)
  }
  const onSearch =  ()=> {
    dispatch(getDogsbyName(name))
    
     
  }
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
            All Dogs
          </button>
        
      </div>
    );
  }
  
  export default SearchBar;