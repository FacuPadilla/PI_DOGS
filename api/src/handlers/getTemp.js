const {GetAllTemps} = require("../controllers/GetAllTemps")

const getTemp = async (req, res)=>{
    try {
        const result = await GetAllTemps();
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}

module.exports = {getTemp}