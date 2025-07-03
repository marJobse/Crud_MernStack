import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaProductos from "./ListaProductos";
import EditarProducto from "./EditarProducto";
import AgregarProducto from "./AgregarProducto";
import Inicio from "./Inicio";

function App() {
  return (
    <div classNameName="App">
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#ffc107", position: "relative" }}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            La Góndola
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/obtenerproductos">
                  Lista de productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/agregarproducto">
                  Agregar Producto
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Ofertas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} exact></Route>
          <Route
            path="/obtenerproductos"
            element={<ListaProductos />}
            exact
          ></Route>
          <Route
            path="/agregarproducto"
            element={<AgregarProducto />}
            exact
          ></Route>
          <Route
            path="/editarProducto/:codigo"
            element={<EditarProducto />}
            exact
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
