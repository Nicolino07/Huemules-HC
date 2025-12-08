import React from "react";
import { FaHockeyPuck, FaCalendarAlt, FaNewspaper, FaInstagram } from "react-icons/fa";
import "./Noticias.css";
import imagenTorneo01 from "../images/Novedades/playoff"; 

export default function Noticias() {
  const noticia = {
    id: 1,
    titulo: "Huemules vuelve a jugar",
    fecha: "12/06/2025",
    imagen01: imagenTorneo01,
  };

  return (
    <section className="novedades">
      <hr className="divider" />
      <h2>
        <FaHockeyPuck className="icono-titulo" /> ¡Últimas novedades!
      </h2>

      <div key={noticia.id} className="noticia">
        <h3>
          <FaNewspaper /> {noticia.titulo}
        </h3>
        {noticia.fecha && (
          <p className="fecha">
            <FaCalendarAlt /> Publicado: {new Date(noticia.fecha).toLocaleDateString('es-AR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </p>
        )}
        <div className="imagen-noticia">
          <img 
            src={noticia.imagen01} 
            alt="Noticia Huemules Hockey Club"
            className="noticia-imagen"
          />
        </div>
        <p>
          Luego de consagrarse subcampeonas del torneo clausura Damas B, el equipo femenino 'Huemules A' 
          vuelve a participar de los play-off en busca del ascenso a primera división. 
          El mismo se disputará en la ciudad de Esquel el día 8 de diciembre.
        </p>
        <p>
          <FaInstagram /> Seguinos en vivo desde{" "}
          <a 
            href="https://www.instagram.com/huemuleshcbariloche/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="enlace-instagram"
          >
            nuestro Instagram
          </a>
        </p>
        <p className="llamado-accion">
          ¡¡¡Te esperamos!!!
        </p>
      </div>
    </section>
  );
}