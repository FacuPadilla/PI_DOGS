const {Dog, Temperaments} = require("../db");

const CreateDogDB = async (name, image, weight,height, life_span, temperaments)=>{
    const newDog = await Dog.create({name, image, weight,height, life_span })

     // Asociar los temperamentos con el perro creado
  if (temperaments && temperaments.length > 0) {
    const temperamentsToAssociate = await Temperaments.findAll({
      where: {
        name: temperaments,
      },
    });

    // Asociar cada temperamento con el perro en la tabla intermedia
    await newDog.addTemperaments(temperamentsToAssociate)
}
    

    return newDog
}

module.exports = {CreateDogDB}




