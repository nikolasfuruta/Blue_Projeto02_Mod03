const PaisesController = require('../controllers/PaisesController');
const {Router} = require('express');
const router = Router();

router.post("/add", PaisesController.adicionar)
router.get("/listall", PaisesController.listar)
router.get("/listname/:nome", PaisesController.buscaPorNome)
router.delete("/delete/:nome", PaisesController.deletar)
router.put("/update/:nome", PaisesController.alterar)

module.exports = router