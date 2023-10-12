const axios = require("axios");
const {Dog, Temperaments} = require("../db")
require("dotenv").config();

const apiKey = process.env.API_KEY

const DogID = async (id, source) => {
   
     if(source === "api"){
        const peticion = (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}?api_key=${apiKey}`)).data 
        return {
            id: peticion.id,
            name: peticion.name,
            life_span: peticion.life_span,
            temperament: peticion.temperament,
            origin: peticion.origin,
            image: `https://cdn2.thedogapi.com/images/${peticion?.reference_image_id}.jpg`,
            weight: peticion.weight.metric,
            height: peticion.height.metric,

        }
     } else {
         const dogFromDB = await Dog.findByPk(id, {
            include: {
                model: Temperaments,
                attributes: ["name"],
            }
         });
         if(dogFromDB) {
            return  {
                id: dogFromDB.id,
                name: dogFromDB.name,
                life_span: dogFromDB.life_span,
                temperament: dogFromDB.temperament,
                origin: dogFromDB.origin,
                image: dogFromDB.image,
                weight: dogFromDB.weight,
                height: dogFromDB.height,
              };
         }
         
         
         
     }
     


     

     

}
module.exports = {DogID}