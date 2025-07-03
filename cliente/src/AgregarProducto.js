import React, { useState } from "react";
import uniqid from "uniqid";
import axios from "axios";
import Swal from "sweetalert2";

function AgregarProducto() {
  // Hooks. Para usarlos en el atributo value del formulario
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [codigo, setCodigo] = useState("");

  // para guardar el formulario con los datos

  function agregarProducto() {
    var producto = {
      nombre: nombre,
      categoria: categoria,
      precio: Number(precio),
      codigo: codigo,
      //idProducto: uniqid(), // esto no va se genera automaticamnt
    };
    console.log(producto);

    axios
      .post("/api/producto/agregarProducto", producto)
      .then((res) => {
        Swal.fire("El producto se agrego exitosamente");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4">Agregar Producto</h2>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="categoria" className="form-label">
              Categoria
            </label>
            <input
              type="text"
              className="form-control"
              value={categoria}
              onChange={(e) => {
                setCategoria(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="codigo" className="form-label">
              Codigo
            </label>
            <input
              type="text"
              className="form-control"
              value={codigo}
              onChange={(e) => {
                setCodigo(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="precio" className="form-label">
              Precio
            </label>
            <input
              type="text"
              className="form-control"
              value={precio}
              onChange={(e) => {
                setPrecio(e.target.value);
              }}
            ></input>
          </div>
          <button onClick={agregarProducto} className="btn btn-success">
            Guardar producto
          </button>
        </div>
      </div>
    </div>
  );
}
export default AgregarProducto;
