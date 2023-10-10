const axios = require("axios")
const {Dog} = require("../db")
require("dotenv").config();

const apiKey = process.env.API_KEY

const GetAllDogs = async ()=>{
    const dogsDB = await Dog.findAll()
    const apidogs = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`)).data

const clean = apidogs.map(dog => {
    return {
        id: dog.id,
        name: dog.name,
        image: dog.image.url,
        weight: dog.weight.metric,
        height: dog.height.metric,
        life_span: dog.life_span,
        temperament: dog.temperament,
        




    }
})


    return [...dogsDB, ...clean]
}

module.exports = {GetAllDogs}