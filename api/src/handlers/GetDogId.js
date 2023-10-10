const {DogID} = require("../controllers/DogID")

const GetDogId = async (req, res)=>{
    const {id} = req.params;

    const source = isNaN(id) ? "bdd" : "api"

     try {
        const response = await  DogID(id, source);
        res.status(202).json(response)
     } catch (error) {
        console.log("error bb")
        res.status(401).json({error: error.message})
     }
}
module.exports = {GetDogId}