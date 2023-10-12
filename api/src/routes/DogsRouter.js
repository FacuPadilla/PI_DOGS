const { Router } = require('express');
const {GetDogs} = require("../handlers/GetDogs")
const {GetDogId} = require("../handlers/GetDogId")
const {postDogs} = require("../handlers/postDogs")
const {GetDogByName} = require("../handlers/GetDogByName")


const DogsRouter = Router();

DogsRouter.get("/", GetDogs)
DogsRouter.get("/search", GetDogByName)
DogsRouter.get("/:id", GetDogId)
DogsRouter.post("/", postDogs)


module.exports = DogsRouter