const axios = require("axios")
const {Temperaments} = require("../db")
require("dotenv").config();

const apiKey = process.env.API_KEY


const GetAllTemps = async ()=>{

    const TempDB = await Temperaments.findAll();

    //Primero, verifico si hay datos en la base de datos (TempDB). Si no hay datos procedo a obtenerlos de la API
    if(!TempDB.length){
        const response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`);
        const dogData = response.data;

        let temperamentClean = [];

        //Proceso los datos de la API para extraer los temperamentos y limpiarlos
        //Creo un nuevo arreglo tempMap utilizando map para dividir los temperamentos por comas (",") o definir "Desconocida" si no hay temperamento.
        const tempMap = dogData.map((el)=> el.temperament ? el.temperament.split(",") : ["Desconocida"]);
        // itero sobre tempMap y agrega cada temperamento limpio al arreglo temperamentClean, eliminando espacios adicionales con trim()
        for (let i = 0; i < tempMap.length; i++) {
            for (let j = 0; j < tempMap[i].length; j++) {
                temperamentClean.push(tempMap[i][j].trim())
                
                
            }
            
        }
        //Después, itera sobre temperamentClean y, si el temperamento no es "Desconocida", intenta crearlo en la base de datos utilizando Temperaments.findOrCreate
        for (let i = 0; i < temperamentClean.length; i++) {
            if (temperamentClean[i] !== "Desconocida"){
                Temperaments.findOrCreate({
                    where: {name: temperamentClean[i]}
                })
            }
            
        }
        // elimino los Temperamentos repetidos del arreglo con un Set
        const SinRepetidos = [...new Set(temperamentClean)];
        return SinRepetidos

    }
    //Si hay datos en la base de datos, simplemente devuelve esos datos.
    return TempDB
     



}

module.exports = {GetAllTemps}