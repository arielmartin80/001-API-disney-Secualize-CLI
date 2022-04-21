const express = require('express')
const router = express.Router()

// Importar controladores
const UserController = require('../controllers/UserController')
const AddressControler = require('../controllers/AddressControler')

// Home
router.get('/', (req, res) => res.json({ foo: "bar" }))

// Users
router.get('/users', UserController.all)

// Addresses
router.get('/addresses', AddressControler.all)

module.exports = router