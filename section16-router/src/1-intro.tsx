import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
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
          <Route element={<h1>Home</h1>} path="/" />
          <Route element={<h1>Bloque 1</h1>} path="/blocks/:id" />
          <Route element={<h1>Nuevo bloque</h1>} path="/blocks/new" />
        </Routes>
      </section>
    </div>
  );
}

export default App;
