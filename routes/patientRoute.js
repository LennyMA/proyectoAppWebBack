const express = require('express')
const router = express.Router()
const patientController = require('../controllers/patientController')

//api/agencias/
router.post('/', patientController.addPatient)
router.get('/', patientController.loadPatients)
router.put('/:id', patientController.updatePatient)
router.get('/:id', patientController.loadPatient)
router.delete('/:id', patientController.deletePatient)

module.exports = router