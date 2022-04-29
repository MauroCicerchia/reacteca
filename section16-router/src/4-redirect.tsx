import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Navigate,
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blocks/new">Nuevo bloque</NavLink>
          </li>
          <li>
            <NavLink to="/blocks/1">Bloque génesis</NavLink>
          </li>
          <li>
            <NavLink to="/rich">GET RICH FAST</NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route element={<h1>Home</h1>} path="/" />
          <Route element={<Bloques />} path="/blocks">
            <Route element={<h1>Nuevo bloque</h1>} path="new" />
            <Route element={<Bloque />} path=":id" />
          </Route>
          <Route element={<Rich />} path="/rich" />
          <Route element={<Zoe />} path="/zoe" />
        </Routes>
      </section>
    </div>
  );
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

function Rich() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/zoe", { replace: true });
  }, [navigate]);

  return (
    // <Navigate to="/zoe" />
    <Navigate replace to="/zoe" />
  );
}

function Zoe() {
  return (
    <img
      alt="cositortix"
      height={500}
      src="https://media.ambito.com/p/599e232a578a8fa2e5fe8ca33a9290f7/adjuntos/239/imagenes/039/584/0039584128/1200x1200/smart/leonardo-cositorto-zoejpg.jpg"
      width={500}
    />
  );
}

export default App;
