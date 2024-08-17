const express = require ("express")
const router = express.Router()
const tecnologias = require ("../controllers/tecnologiasCtrl")
const experiences = require ("../controllers/experiencesCtrl")

router.get("/",

    experiences.experiencesListar
)

router.get("/:id/:nombre",
    experiences.experiencesObtener
)

router.put("/",
    experiences.experiencesActualizar
)

router.delete("/:company",
    experiences.experiencesEliminar
)
router.delete("/",(req, res)=>{
    res.status(404).send("ruta/dato no encontrado (experience)")
}
)

router.post("/", 
    experiences.experiencesGuardar
)

module.exports = router 