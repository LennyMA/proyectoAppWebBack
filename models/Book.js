const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const BookSchema = mongoose.Schema({
  fecha: {
    type: Date,
    requiere: true,
  },
  hora: {
    type: String,
    require: true,
  },
  paciente: {
    type: String,
    require: true,
  },
  motivo: {
    type: String,
    require: true,
  },
  medico: {
    type: String,
    require: true,
  },
  especialidad: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("book", BookSchema);
