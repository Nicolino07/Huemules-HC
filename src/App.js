import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Historia from "./pages/Historia";
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";
import Navbar from "./components/NavBar";
import Calendario from "./pages/Calendario";
import Footer from "./components/Footer";
import Noticias from "./components/Noticias";

import "./App.css";

/*Importar fotos necesarias para la portada */
import fondo from "./images/Fondos/Bandera Huemules.PNG";
import portada from "./images/Galeria/img_01.jpg";


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
                <figure className="foto-club">
                  <img src={portada} alt="Portada" className="portada-img" />
                  <figcaption className="epigrafe-principal">Huemules Hockey Club, pasión por el hockey</figcaption>
                </figure>
              </section>

              <section class="novedades">

                <Noticias/>
      
                <div className="reel-container">
                  <video src="/Videos/reel_1.mp4" controls muted autoPlay loop />
                  <video src="/Videos/reel_2.mp4" controls muted autoPlay loop />
                </div>
                
                <h3>CONSULTANOS!!</h3>
                <p>Teléfono: 294 467-7439 </p>

              </section>

             


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
