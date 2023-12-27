const mongoose = require('mongoose')
const DoctorSchema = mongoose.Schema({
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
    especialidad: {
        type: String,
        require: true
    },
    nacionalidad: {
        type: String,
        require: true
    },
    fecha: {
        type: Date,
        requiere: true
    }
})

module.exports = mongoose.model('doctor', DoctorSchema)