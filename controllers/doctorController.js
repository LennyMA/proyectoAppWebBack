const Doctor = require("../models/Doctor")

exports.addDoctor = async (req, res) => {
    try {
        let doctor
        //Crear paciente
        doctor = new Doctor(req.body)
        await doctor.save()
        res.send(doctor)
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al registrar al paciente')
    }
}

exports.loadDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find()
        res.json(doctors)
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al cargar el listado')
    }
}

exports.loadDoctor = async (req, res) => {
    try {
        let doctor = await Doctor.findById(req.params.id)
        if (!doctor) {
            res.status(404).json({ msg: 'No existe el paciente' })
        }
        res.json(doctor)
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al cargar el registro')
    }
}

exports.updateDoctor = async (req, res) => {
    try {
        const { name, apellido, especialidad, nacionalidad, fecha } = req.body
        let doctor = await Doctor.findById(req.params.id)
        if (!doctor) {
            res.status(404).json({ msg: 'No existe el médico' })
        }
        doctor.name = name
        doctor.apellido = apellido
        doctor.especialidad = especialidad
        doctor.nacionalidad = nacionalidad
        doctor.fecha = fecha

        doctor = await Doctor.findOneAndUpdate({ _id: req.params.id }, doctor, { new: true })
        res.json(doctor)
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al actualizar el registro')
    }
}

exports.deleteDoctor = async (req, res) => {
    try {
        let doctor = await Doctor.findById(req.params.id)
        if (!doctor) {
            res.status(404).json({ msg: 'No existe el médico' })
        }
        await Doctor.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Paciente eliminado con éxito' })
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar el registro')
    }
}