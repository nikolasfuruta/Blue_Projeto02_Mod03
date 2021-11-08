const CidadesController = require('../controllers/CidadeController');
const {Router} = require('express');
const router = Router();

router.post("/add", CidadesController.adicionar)
router.get("/listall", CidadesController.listar)
router.get("/listname/:nome", CidadesController.buscaPorNome)
router.delete("/delete/:nome", CidadesController.deletar)
router.put("/update/:nome", CidadesController.alterar)

module.exports = router