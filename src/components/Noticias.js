import { useEffect, useState } from "react";
import { FaHockeyPuck, FaInstagram } from "react-icons/fa";
import Papa from "papaparse";
import "./Noticias.css";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vT5h-_3NWwKU5XqRyGUyj5773qHrbsFiepXXWxfQEgYj1canddVboREtdFF2oG2VBL3tOZ64jgmbEgE/pub?gid=0&output=csv";

function parsearCSV(texto) {
  const { data } = Papa.parse(texto, { header: true, skipEmptyLines: true });
  return data
    .map((fila) => ({
      url: fila["url_post"]?.trim(),
      titulo: fila["titulo"]?.trim(),
      descripcion: fila["descripcion"]?.trim(),
    }))
    .filter((n) => n.url);
}

export default function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.text())
      .then((texto) => {
        setNoticias(parsearCSV(texto));
        setCargando(false);
      })
      .catch(() => {
        setError("No se pudieron cargar las novedades.");
        setCargando(false);
      });
  }, []);

  return (
    <section className="novedades">
      <hr className="divider" />
      <h2>
        <FaHockeyPuck className="icono-titulo" /> ¡Últimas novedades!
      </h2>

      {cargando && <p className="estado-carga">Cargando novedades...</p>}
      {error && <p className="estado-error">{error}</p>}

      <div className="noticias-lista">
        {noticias.map((noticia, i) => (
          <div key={i} className="noticia">
            {noticia.titulo && <h3 className="noticia-titulo">{noticia.titulo}</h3>}
            {noticia.descripcion && <p>{noticia.descripcion}</p>}
            <a
              href={noticia.url}
              target="_blank"
              rel="noopener noreferrer"
              className="enlace-instagram"
            >
              <FaInstagram /> Ver en Instagram
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
