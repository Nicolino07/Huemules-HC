import { useEffect, useState } from "react";
import { FaHockeyPuck } from "react-icons/fa";
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

  useEffect(() => {
    if (noticias.length === 0) return;
    const procesar = () => window.instgrm?.Embeds.process();
    if (!document.getElementById("instagram-embed-script")) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = procesar;
      document.body.appendChild(script);
    } else {
      setTimeout(procesar, 300);
    }
  }, [noticias]);

  return (
    <section className="novedades">
      <h2>
        <FaHockeyPuck className="icono-titulo" /> ¡Últimas novedades!
      </h2>

      {cargando && <p className="estado-carga">Cargando novedades...</p>}
      {error && <p className="estado-error">{error}</p>}

      <div className="noticias-lista">
        {noticias.map((noticia) => (
          <div key={noticia.url} className="noticia-embed">
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink={noticia.url}
              data-instgrm-version="14"
              style={{ minWidth: "unset", width: "100%", maxWidth: "320px", margin: "0 auto" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
