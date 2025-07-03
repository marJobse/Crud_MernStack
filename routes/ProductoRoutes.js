const express = require("express");
const router = express.Router();
const Producto = require("../models/Producto");
const { body, validationResult } = require("express-validator");
const validar = require("../middlewares/validar");

//http://localhost:3031/api/producto/ejemplo

router.get("/ejemplo", (req, res) => {
  //Para mapear app.use("/api/producto", productoRoutes);  en server.js
  res.send("Saludo desde ruta ejemplo");
});

// Endpoint para crear producto
router.post("/agregarProducto", async (req, res) => {
  try {
    console.log(req.body);
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).send("Producto agregado correctamente");
  } catch (error) {
    res.status(400).send("Se produjo error al crear el producto", error);
  }
});

// Endpoint para obtener todos los productos
//http://localhost:3031/api/producto/obtenerproductos
router.get("/obtenerProductos", async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Endpoint para leer los datos de 1 producto a partir del codigo
//http://localhost:3031/api/producto/obtenerproductos
router.get("/obtenerDataProducto/:codigo", async (req, res) => {
  try {
    const producto = await Producto.findOne({ codigo: req.params.codigo });
    res.status(200).json(producto);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Endpoint para editar producto
router.post("/editarProducto", async (req, res) => {
  try {
    const actualizado = await Producto.findOneAndUpdate(
      { codigo: req.body.codigo }, // buscar por código
      {
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        precio: req.body.precio,
      },
      { new: true } // devuelve el documento actualizado
    );

    if (actualizado) {
      res.send("Producto actualizado correctamente");
    } else {
      res.status(404).send("Producto no encontrado");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al actualizar el producto");
  }
});

// Endpoint para borrar producto

router.post("/borrarproducto", async (req, res) => {
  try {
    const eliminado = await Producto.findOneAndDelete({
      codigo: req.body.codigo,
    });

    if (eliminado) {
      res.send("Producto borrado correctamente");
    } else {
      res.status(404).send("Producto no encontrado");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al borrar el producto");
  }
});
module.exports = router;
