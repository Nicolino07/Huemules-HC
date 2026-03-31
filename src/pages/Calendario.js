import { useEffect, useState } from "react";
import Papa from "papaparse";
import "./Calendario.css";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vT5h-_3NWwKU5XqRyGUyj5773qHrbsFiepXXWxfQEgYj1canddVboREtdFF2oG2VBL3tOZ64jgmbEgE/pub?gid=627174794&output=csv";

function parsearCSV(texto) {
  const { data } = Papa.parse(texto, { header: true, skipEmptyLines: true });
  return data
    .map((fila) => ({
      fecha: fila["fecha"]?.trim(),
      equipoLocal: fila["equipo_local"]?.trim(),
      equipoVisitante: fila["equipo_visitante"]?.trim(),
      hora: fila["hora"]?.trim(),
      ubicacion: fila["ubicacion"]?.trim(),
      categoria: fila["categoria"]?.trim(),
    }))
    .filter((p) => p.fecha);
}

function agruparPorFecha(partidos) {
  return partidos.reduce((acc, partido) => {
    if (!acc[partido.fecha]) acc[partido.fecha] = [];
    acc[partido.fecha].push(partido);
    return acc;
  }, {});
}

export default function Calendario() {
  const [partidos, setPartidos] = useState({});
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.text())
      .then((texto) => {
        setPartidos(agruparPorFecha(parsearCSV(texto)));
        setCargando(false);
      })
      .catch(() => {
        setError("No se pudo cargar el fixture.");
        setCargando(false);
      });
  }, []);

  return (
    <div className="calendario-container">
      <h1>Próximas fechas</h1>

      {cargando && <p>Cargando fixture...</p>}
      {error && <p>{error}</p>}

      {Object.entries(partidos).map(([fecha, partidos]) => (
        <div key={fecha} className="dia-partidos">
          <h2>{fecha}</h2>
          {partidos.map((p, i) => (
            <div key={i}>
              {p.categoria && <h3>{p.categoria}</h3>}
              <p>{p.equipoLocal} vs {p.equipoVisitante}</p>
              <p>{p.hora} hs</p>
            </div>
          ))}
          {partidos[0]?.ubicacion && (
            <h3 className="ubicacion">{partidos[0].ubicacion}</h3>
          )}
        </div>
      ))}
    </div>
  );
}
