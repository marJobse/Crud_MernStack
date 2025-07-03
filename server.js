const express = require("express");
const app = express();
const PORT = process.env.PORT || 3031;

//Importar conexión a mongoDB
const archivoDB = require("./config/mongoDB");
// Importación del archivo de rutas y modelo productos
const productoRoutes = require("./routes/ProductoRoutes");

//Para leer datos en req.. COnfiguraciones del body-parser
//app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'true"' }));

//http://localhost:3030/api/producto
app.use("/api/producto", productoRoutes); // hay que mapear esta ruta en el archivo routes/productoRoutes

app.get("/", (req, res) => {
  res.send("Bienvenidos al servidor backend Node.js corriendo...");
});

app.use((req, res) => {
  // para manejar rutas inexistentes
  res.status(404).send("Lo siento, la página buscada no existe");
});
app.listen(PORT, () => {
  console.log("Servidor en puerto 3030");
});
