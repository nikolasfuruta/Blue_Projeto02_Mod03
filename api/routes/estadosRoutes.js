const EstadosController = require('../controllers/EstadosController');
const {Router} = require('express');
const router = Router();

router.post("/add", EstadosController.adicionar)
router.get("/listall", EstadosController.listar)
router.get("/listname/:nome", EstadosController.buscaPorNome)
router.delete("/delete/:nome", EstadosController.deletar)
router.put("/update/:nome", EstadosController.alterar)

module.exports = router