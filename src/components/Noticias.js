import React, { useEffect, useState } from "react";
import "./Noticias.css";

export default function Noticias() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/noticias")
      .then((res) => res.json())
      .then((data) => setNoticias(data))
      .catch((err) => console.error("Error al cargar noticias:", err));
  }, []);

  return (
    <section className="novedades">
      <hr className="divider" />
      <h2>¡Últimas novedades!</h2>

      {noticias.map((n) => (
        <div key={n.id} className="noticia">
          <h3>{n.titulo}</h3>
          <p>{n.contenido}</p>
          <hr className="divider" />
        </div>
      ))}

    </section>
  );
}
