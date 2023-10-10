const {CreateDogDB} = require("../controllers/CreateDog")

const postDogs = async (req, res)=>{
    const {name, image, weight,height, life_span, temperaments} = req.body;
    try {
        if(!name ||  !image || !weight ||!height || !life_span) throw Error ("Faltan datos")
        const response = await CreateDogDB(name, image, weight,height, life_span, temperaments)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {postDogs}