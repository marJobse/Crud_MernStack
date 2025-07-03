import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

function EditarProducto() {
  const params = useParams();

  // Hooks. Para usarlos en el atributo value del formulario
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [codigo, setCodigo] = useState("");

  useEffect(() => {
    axios
      .get(`/api/producto/obtenerDataProducto/${params.codigo}`)
      .then((res) => {
        console.log(res.data); // es un único objeto
        const dataProducto = res.data;
        setNombre(dataProducto.nombre);
        setCategoria(dataProducto.categoria);
        setPrecio(dataProducto.precio);
        setCodigo(dataProducto.codigo);
      })
      .catch((err) => console.error(err));
  }, [params.codigo]);

  // función que se ejecuta cuando se presiona el boton de guardar edicion
  function editarProducto() {
    var producto = {
      nombre: nombre,
      categoria: categoria,
      precio: Number(precio),
      codigo: params.codigo,
    };
    console.log(producto);

    axios
      .post("/api/producto/editarProducto", producto)
      .then((res) => {
        Swal.fire("El producto se edito exitosamente");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4">Editar Producto</h2>
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
          <button onClick={editarProducto} className="btn btn-success">
            Guardar edición
          </button>
        </div>
      </div>
    </div>
  );
}
export default EditarProducto;
