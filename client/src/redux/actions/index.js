import axios from "axios";

export const GET_DOGS = "GET_DOGS"
export const GET_DOGS_BY_NAME = "GET_DOGS_BY_NAME"
export const CLEAR_DOGS ="CLEAR_DOGS"


const endpoint = "http://localhost:3001";

export const getDogs=()=>{
    return async function(dispatch){
        const response = await axios.get(`${endpoint}/dogs`);
        const dogs = response.data;

        dispatch({type: GET_DOGS, payload: dogs})

    }
}

export const getDogsbyName=(name)=>{
    return async (dispatch)=> {
        try {
            const response = await axios.get(`${endpoint}/dogs/search?name=${name}`);
            const dog = response.data;
    
            return dispatch({type: GET_DOGS_BY_NAME, payload: dog})
            
        } catch (error) {
            window.alert('¡Esa raza no existe!');
        }
       

    }
}
export const clearDogs = () => {
    return (dispatch) => {
      return dispatch({
        type: CLEAR_DOGS,
        payload: []
      })
    };
  };




