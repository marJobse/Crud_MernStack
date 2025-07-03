const mongoose = require("mongoose");
// const dotenv= require('dotenv'); dotenv.config();
require("dotenv").config(); // npm i dotenv

const mongoURL = process.env.MONGODB_URLSTRING;

// establecer conexión con mongoDB
mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Conexión a MongoDB exitosa");
  })
  .catch((err) => {
    console.error("Error en conexión MongoDB", err);
  });

module.exports = mongoose;
