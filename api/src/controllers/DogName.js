const axios = require("axios");
const {Dog} = require("../db")
const { Op } = require('sequelize');
require("dotenv").config();

const apiKey = process.env.API_KEY

const DogName = async (name) =>{
    // Convertir todo a minúsculas y dividir por espacios
    let nameArray = name.toLowerCase().split(' ');
    // Capitalizar la primera letra de cada palabra
    for (let i = 0; i < nameArray.length; i++) {
        nameArray[i] = nameArray[i].charAt(0).toUpperCase() + nameArray[i].slice(1);
      }
      // Unir las palabras nuevamente
      let capitalizedName = nameArray.join(' ');
    

 const dogsApi = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`)).data;

 const clean = dogsApi.map(dog => {
    return {
        id: dog.id,
        name: dog.name,
        image: dog.image.url,
        weight: dog.weight.metric,
        height: dog.height.metric,
        life_span: dog.life_span,
        temperament: dog.temperament
        




    }
})

const DogFiltrado = clean.filter((dog) => dog.name === capitalizedName)



const DogNameDB = await Dog.findAll({
  where:{
    name:{
      [Op.iLike]: `%${name}%`
    }
  }
  
  })


if (DogFiltrado.length === 0 && DogNameDB.length === 0) {
    throw new Error('La raza no existe.');
  }


return [...DogNameDB, ...DogFiltrado]

}

module.exports = {DogName}