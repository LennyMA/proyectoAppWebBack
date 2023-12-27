const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

//api/login/

router.post('/', userController.addUser)

module.exports = router