const {Dog, Temperaments} = require("../db");

const CreateDogDB = async (name, image, weight,height, life_span, temperament)=>{
    const newDog = await Dog.create({name, image, weight,height, life_span, temperament,  })

     // Asociar los temperamentos con el perro creado
  if (temperament && temperament.length > 0) {
    const temperamentsToAssociate = await Temperaments.findAll({
      where: {
        name: temperament,
      },
    });

    // Asociar cada temperamento con el perro en la tabla intermedia
    await newDog.addTemperaments(temperamentsToAssociate)
}
    

    return newDog
}

module.exports = {CreateDogDB}




