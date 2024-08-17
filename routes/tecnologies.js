const express = require ("express")
const router = express.Router()
const tecnologias = require ("../controllers/tecnologiasCtrl")

router.get("/",

    tecnologias.tecnologiasListar
)

router.get("/:id/:nombre",
    tecnologias.tecnologiasObtener
)

router.put("/",
    tecnologias.tecnologiasActualizar
)

router.delete("/:id",
    tecnologias.tecnologiaEliminar
)
router.delete("/",(req, res)=>{
    res.status(404).send("ruta/dato no encontrado")
}
)

router.post("/", 
    tecnologias.tecnologiasGuardar
)

module.exports = router 