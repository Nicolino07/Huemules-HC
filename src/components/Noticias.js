import React from "react";
import { Link } from "react-router-dom";
import { FaHockeyPuck, FaCalendarAlt, FaNewspaper } from "react-icons/fa";
import "./Noticias.css";

export default function Noticias() {
  const noticia = {
    id: 1,
    titulo: "Arranca el torneo",
    fecha: "2023-08-05"
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
        <p>
          Este fin de semana 8 y 9 de agosto se juega la primer fecha del torneo 
          clausura 2025 y Huemules dirá presente. Vení a alentarnos, consulta los horarios en nuestro{' '}
          <Link to="/calendario" className="enlace-calendario">calendario</Link>
        </p>
      </div>
    </section>
  );
}