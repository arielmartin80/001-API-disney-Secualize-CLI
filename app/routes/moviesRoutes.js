const express = require('express')
const router = express.Router()

// Importar controladores
const moviesController = require('../controllers/MoviesController')

// GET ALL
router.get('/', moviesController.getAll)

// GET ONE
router.get('/:id', moviesController.getOne)

// CREATE
router.post('/', moviesController.create)

// UPDATE
router.put('/:id', moviesController.update)

// DELETE
router.delete('/:id', moviesController.delete)



module.exports = router