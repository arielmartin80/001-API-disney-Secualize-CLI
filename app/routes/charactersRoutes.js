const express = require('express')
const router = express.Router()

// Importar controladores
const charactersController = require('../controllers/CharactersController')

// GET ALL
router.get('/', charactersController.getAll)

// GET ONE
router.get('/:id', charactersController.getOne)

// CREATE
router.post('/', charactersController.create)

// UPDATE
router.put('/:id', charactersController.update)

// DELETE
router.delete('/:id', charactersController.delete)



module.exports = router