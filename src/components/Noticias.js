import React from "react";
import { FaHockeyPuck, FaCalendarAlt, FaNewspaper } from "react-icons/fa";
import "./Noticias.css";
// Importa la imagen (ajusta la ruta según donde tengas tu imagen)
import imagenTorneo from "/home/nicolas/Huemules-HC/src/images/Novedades/calendario_huemules.jpeg"; // o la ruta correcta

export default function Noticias() {
  const noticia = {
    id: 1,
    titulo: "Llegó la hora!!!",
    fecha: "08/05/2025",
    imagen: imagenTorneo, // Agrega la imagen al objeto noticia
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
            src={noticia.imagen} 
            alt={noticia.altTexto} 
            className="noticia-imagen"
          />
        </div>
        <p>
          Este fin de semana 8 y 9 de agosto se juega la primer fecha del torneo 
          clausura 2025 y Huemules dirá presente. Vení a alentarnos.
        </p>
      </div>
    </section>
  );
}