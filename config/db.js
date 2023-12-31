const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });
mongoose.set("strictQuery", false);

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //findOneAndUpdate: true
    });
    console.log("BD conectada");
  } catch (error) {
    console.log(error);
    process.exit(1); //detener la app
  }
};

module.exports = conectarDB;
