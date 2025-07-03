import React, { useEffect, useState } from "react";
import ProductoIndividual from "./ProductoIndividual";
import axios from "axios";

function ListaProductos() {
  const [dataProducto, setDataProducto] = useState([]); // para traer el objeto completo de Producto

  useEffect(() => {
    axios
      .get("api/producto/obtenerProductos")
      .then((res) => {
        console.log(res.data);
        setDataProducto(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Mapear listaproducto en objeto producto
  const listaProductos = dataProducto.map((producto) => {
    return (
      <div>
        <ProductoIndividual producto={producto} />
      </div>
    );
  });

  return (
    <div>
      <h2>Lista de productos</h2>
      {listaProductos}
    </div>
  );
}
export default ListaProductos;
