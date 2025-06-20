import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Historia from "./pages/Historia";
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";
import Navbar from "./components/NavBar";
import Calendario from "./pages/Calendario";
import Footer from "./components/Footer"; // importamos el footer

import "./App.css";
import fondo from "./images/Fondos/Bandera Huemules.PNG";
import portada from "./images/Galeria/img_01.jpg";

export default function App() {
  return (
    <BrowserRouter>
      <div className="foto-fondo">
        <img src={fondo} alt="Fondo" />
      </div>

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <main className="content">
              <section className="hero">
                <h1>Huemules Hockey Club</h1>
                <div className="foto-club">
                  <img src={portada} alt="Portada" className="portada-img" />
                </div>
                <p>Algo mas..</p>
              </section>
            </main>
          }
        />
        <Route path="/historia" element={<Historia />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/Calendario" element={<Calendario/>}/>
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
