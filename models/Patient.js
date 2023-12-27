const mongoose = require('mongoose')
const PatientSchema = mongoose.Schema({
    cedula: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    apellido: {
        type: String,
        require: true
    },
    telefono: {
        type: String,
        require: true
    },
    fecha: {
        type: Date,
        default: Date.now()
    },
    direccion: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('patient', PatientSchema)