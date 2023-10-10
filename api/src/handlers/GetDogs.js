const {GetAllDogs} = require("../controllers/GetAllDogs")

const GetDogs = async  (req, res) =>{

   try {
      const response = await GetAllDogs();
      res.status(200).json(response)
      
   } catch (error) {
      console.log("hubo un error bb")
      res.status(400).json({error: error.message})
      
   }
}

module.exports = {GetDogs}