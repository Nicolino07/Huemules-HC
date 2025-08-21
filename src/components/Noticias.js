import React from "react";
import { FaHockeyPuck, FaCalendarAlt, FaNewspaper } from "react-icons/fa";
import "./Noticias.css";
// Importa la imagen (ajusta la ruta según donde tengas tu imagen)
import imagenTorneo01 from "/home/nicolas/Huemules-HC/src/images/Novedades/calendario_01.jpeg"; // o la ruta correcta
import imagenTorneo02 from "/home/nicolas/Huemules-HC/src/images/Novedades/calendario_02.jpeg";


export default function Noticias() {
  const noticia = {
    id: 1,
    titulo: "Huemules vuelve a jugar",
    fecha: "08/21/2025",
    imagen01: imagenTorneo01, // Agrega la imagen al objeto noticia
    imagen02: imagenTorneo02,
    altTexto: "Fechas del proximo fin de semana" // Texto alternativo para accesibilidad
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
        {/* Agrega la imagen aquí */}
          <div className="imagen-noticia">
            <img 
              src={noticia.imagen02} 
              alt={noticia.altTexto} 
              className="noticia-imagen"
            />
            <img 
              src={noticia.imagen01} 
              alt={noticia.altTexto} 
              className="noticia-imagen"
            />
          </div>
        <p>
           ¡¡¡Te esperamos!!!
        </p>
      </div>
    </section>
  );
}