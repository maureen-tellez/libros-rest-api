const express = require("express")
const router = express.Router()
const librosController = require("../controllers/librosController")

router.post("/", librosController.createLibro)
router.put("/:id", librosController.updateLibro)
router.get("/", librosController.findAllLibros)
router.delete("/:id", librosController.deleteLibro)
router.get("/:id", librosController.findLibro)

module.exports = router