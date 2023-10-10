const { Router } = require('express');
// Importar todos los routers;
const DogsRouter = require("./DogsRouter")
const TempRouter = require("./TempRouter")
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", DogsRouter)
router.use("/temperaments", TempRouter)


module.exports = router;
