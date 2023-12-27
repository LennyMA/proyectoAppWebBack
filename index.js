const express = require("express");
const cors = require("cors");
const conectarDB = require("./config/db");
const morgan = require("morgan");

//Crear el servidor
const app = express();

//Conexion a la BD
conectarDB();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.use("/api/pacientes", require("./routes/patientRoute"));
app.use("/api/medicos", require("./routes/doctorRoute"));
app.use("/api/citas", require("./routes/bookRoute"));
app.use("/api/usuarios", require("./routes/usersRoute"));

app.listen(4800, () => {
  console.log("El servidor se está ejecutando");
});
