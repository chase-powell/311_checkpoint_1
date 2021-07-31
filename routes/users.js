const express = require("express");
const router = express.Router()
const controller = require('../controllers/users')

router.get('/users/', controller.getUsers)
router.get('/users/:id', controller.getUsersById)
router.post('/users', controller.createUser)
router.put('/users/:id', controller.updateUser)
router.delete('/users/:id', controller.deleteUser)

module.exports = {router}



