import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Historia from "./pages/Historia";
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";
import Navbar from "./components/NavBar";
import Calendario from "./pages/Calendario";
import Footer from "./components/Footer";
import Noticias from "./components/Noticias";
import FixtureWidget from "./components/FixtureWidget";

import "./App.css";

import fondo from "./images/Fondos/Bandera Huemules.PNG";


export default function App() {
  return (
    <HashRouter>
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
              </section>

              <div className="home-contenido">
                <div className="home-layout">
                  <div className="home-noticias">
                    <Noticias />
                  </div>
                  <div className="home-fixture">
                    <FixtureWidget />
                  </div>
                </div>
                <div className="contacto-home">
                  <h3>CONSULTANOS!!</h3>
                  <p>Teléfono: 294 467-7439</p>
                </div>
              </div>

             


            </main>
          }
        />
        <Route path="/historia" element={<Historia />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/Calendario" element={<Calendario />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}
