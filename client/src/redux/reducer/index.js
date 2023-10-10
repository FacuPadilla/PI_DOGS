import {GET_DOGS, GET_DOGS_BY_NAME, CLEAR_DOGS,} from "../actions/index"

let initialState = {
    allDogs: [],
    
}

const rootReducer = (state= initialState, action)=>{
    switch(action.type){
        case GET_DOGS:
            return {...state, allDogs: action.payload}
        
        case GET_DOGS_BY_NAME: 
        return {...state, allDogs: action.payload}
        
        case CLEAR_DOGS:
          return {
              ...state,
              allDogs: [],
              
          }
          
        default:
            return {...state};
    }
}

export default rootReducer