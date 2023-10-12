import {GET_DOGS, GET_DOGS_BY_NAME, CLEAR_DOGS, ORDER, ORDER_ORIGIN} from "../actions/index"

let initialState = {
    allDogs: [],
    dogsOrigin: [],
    
    
}

const rootReducer = (state= initialState, action)=>{
  
    switch(action.type){
        case GET_DOGS:
            return {...state, allDogs: action.payload, dogsOrigin: action.payload}
        
        case GET_DOGS_BY_NAME: 
        return {...state, allDogs: action.payload, dogsOrigin: action.payload}
        
        case CLEAR_DOGS:
          return {
              ...state,
              allDogs: [],
              
          }
          case ORDER:
  // Crear una copia (DogsCopy) del estado original (allDogs) antes de ordenar para asegurar que no se realice una modificación directa sobre el estado original
  const dogsCopy = [...state.allDogs];
  
  if (action.payload === "A") {
   
    // Orden alfabético de A a Z
    dogsCopy.sort((a, b) => (a.name > b.name ? 1 : -1));
  } else if (action.payload === "B") {
   
    // Orden alfabético de Z a A
    dogsCopy.sort((a, b) => (b.name > a.name ? 1 : -1));
  } else if (action.payload === "C" || action.payload === "D") {
    
    // Orden por peso
    dogsCopy.sort((a, b) => {
        {/*divido la propiedad weight de los objetos a y b en dos partes usando split('-').
     Esto asume que el formato de la propiedad weight es algo como "min-max" (por ejemplo, "10-20"). Si a.weight o b.weight no están definidos,
     se establece weightPartsA o weightPartsB en null. */}

      const weightPartsA = a.weight && a.weight? a.weight.split('-') : null;
      const weightPartsB = b.weight && b.weight ? b.weight.split('-') : null;

      {/* Aquí verifico si weightPartsA[1] y weightPartsB[1] están definidos,
     de ser asi significa q la dividi en dos partes (min y max)
     luego convierto esas partes a números usando parseFloat y
     elimino cualquier espacio en blanco alrededor de los números usando trim().*/}

      if (weightPartsA && weightPartsA[1] && weightPartsB && weightPartsB[1]) {
        const weightMaxA = parseFloat(weightPartsA[1].trim());
        const weightMaxB = parseFloat(weightPartsB[1].trim());

        if (action.payload === "C") {
         
            // Orden por peso de mayor a menor
          return weightMaxB - weightMaxA;
        } else {
         
            // Orden por peso de menor a mayor
          return weightMaxA - weightMaxB;
        }
      }

      // Si no pudimos obtener el peso máximo de alguna de las partes, simplemente devolvemos 0, lo que indica que no se debe cambiar el orden.
      return 0;
    });
  }

 return { ...state, allDogs: dogsCopy };

 case ORDER_ORIGIN:
  
  

  if (action.payload === "all") {
    return {...state}
  } else if (action.payload === "api") {
    const updatedDogsOrigin = state.allDogs.filter(dog => typeof dog?.id === "number");
    return {...state, dogsOrigin: updatedDogsOrigin }
  } else if (action.payload === "bdd") {
    const updatedDogsOrigin = state.allDogs.filter(dog => typeof dog?.id === "string");
    return {...state, dogsOrigin: updatedDogsOrigin }
  }

  




          
        default:
            return {...state};
    }
}

export default rootReducer