const express = require('express')
const router = express.Router()
//const loginController = require('../controllers/loginController')
const User = require("../models/User")

//api/login/

//router.post('/login', loginController.login)
router.post('/login', async (req, res) => {

    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(401).send("No existe el usuario")
    }

    if (user.password !== password) {
        return res.status(401).send("Contraseña incorrecta")
    }
    return res.status(200)
})

module.exports = router