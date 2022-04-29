import React, { useState } from "react";
import { Link, Outlet, Route, Routes, useParams } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blocks/new">Nuevo bloque</Link>
          </li>
          <li>
            <Link to="/blocks/1">Bloque génesis</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Bloques />} path="/blocks">
            <Route element={<h1>Nuevo bloque</h1>} path="new" />
            <Route element={<Bloque />} path=":id" />
          </Route>
        </Routes>
      </section>
    </div>
  );
}

function Home() {
  console.log("Renderizando Home");

  return <h1>Home</h1>;
}

function Bloques() {
  return (
    <section>
      <h1>Bloques</h1>
      <Outlet />
    </section>
  );
}

function Bloque() {
  const params = useParams();
  const id = parseInt(params.id || "0");

  return (
    <div>
      <h1>Bloque {id}</h1>
      <div>
        <Link to={`/blocks/${id - 1}`}>Anterior</Link>
        <Link to={`/blocks/${id + 1}`}>Siguiente</Link>
      </div>
    </div>
  );
}

export default App;
