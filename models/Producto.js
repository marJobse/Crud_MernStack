const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productoSchema = new schema({
  nombre: { type: String, required: true },
  categoria: { type: String, required: true },
  codigo: { type: String, required: true },
  precio: { type: Number, required: true },
});

module.exports = mongoose.model("Producto", productoSchema);
