const Patient = require("../models/Patient")

exports.addPatient = async (req, res) => {
    try {
        let patient
        //Crear paciente
        patient = new Patient(req.body)
        await patient.save()
        res.send(patient)
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al registrar al paciente')
    }
}

exports.loadPatients = async (req, res) => {
    try {
        const patients = await Patient.find()
        res.json(patients)
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al cargar el listado')
    }
}

exports.loadPatient = async (req, res) => {
    try {
        let patient = await Patient.findById(req.params.id)
        if (!patient) {
            res.status(404).json({ msg: 'No existe el paciente' })
        }
        res.json(patient)
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al cargar el registro')
    }
}

exports.updatePatient = async (req, res) => {
    try {
        const { name, apellido, telefono, fecha, direccion } = req.body
        let patient = await Patient.findById(req.params.id)
        if (!patient) {
            res.status(404).json({ msg: 'No existe el paciente' })
        }
        patient.name = name
        patient.apellido = apellido
        patient.telefono = telefono
        patient.fecha = fecha
        patient.direccion = direccion

        patient = await Patient.findOneAndUpdate({ _id: req.params.id }, patient, { new: true })
        res.json(patient)
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al actualizar el registro')
    }
}

exports.deletePatient = async (req, res) => {
    try {
        let patient = await Patient.findById(req.params.id)
        if (!patient) {
            res.status(404).json({ msg: 'No existe el paciente' })
        }
        await Patient.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Paciente eliminado con éxito' })
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar el registro')
    }
}