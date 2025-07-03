import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function ProductoIndividual({ producto }) {
  // Función para borrar producto
  function borrarProducto(codigo) {
    axios
      .post("/api/producto/borrarproducto", { codigo: codigo })
      .then((res) => {
        // alert(res.data);
        Swal.fire("Felicidades", "El producto se borro exitosamente");
      })
      .catch((err) => {
        console.error(err);
        alert("Error al borrar el producto");
      });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3 offset-3">
          <ul className="list-group">
            <li className="list-group-item">Código: {producto.codigo}</li>
            <li className="list-group-item">Nombre: {producto.nombre}</li>
            <li className="list-group-item">Categoria: {producto.categoria}</li>
            <li className="list-group-item">Precio: ${producto.precio}</li>
          </ul>
          <Link to={`/editarProducto/${producto.codigo}`}>
            <li className="btn btn-success mt-2">Editar</li>
          </Link>
          &nbsp;
          <button
            className="btn btn-danger"
            onClick={() => {
              borrarProducto(producto.codigo);
            }}
          >
            Borrar
          </button>
          <hr className="mt-4" />
        </div>
      </div>
    </div>
  );
}

export default ProductoIndividual;
