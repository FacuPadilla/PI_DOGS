const {DogName} = require("../controllers/DogName")
const GetDogByName = async (req, res)=>{
    
    try {
    const {name} = req.query;

    const response = await DogName(name)
    console.log(name)


    res.status(200).json(response)
        
        
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}
module.exports = {GetDogByName}