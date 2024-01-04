const User = require("../models/User");

exports.addUser = async (req, res) => {
  try {
    let user;
    //Crear paciente
    user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al registrar al usuario");
  }
};
