const { Router } = require('express');
const {getTemp} = require("../handlers/getTemp")

const TempRouter = Router();

TempRouter.get("/", getTemp)

module.exports = TempRouter