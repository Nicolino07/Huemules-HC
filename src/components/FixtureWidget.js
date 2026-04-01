import { useEffect, useState } from "react";
import { FaHockeyPuck } from "react-icons/fa";
import Papa from "papaparse";
import "./FixtureWidget.css";

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

export default function FixtureWidget() {
  const [partidosPorFecha, setPartidosPorFecha] = useState({});
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.text())
      .then((texto) => {
        setPartidosPorFecha(agruparPorFecha(parsearCSV(texto)));
        setCargando(false);
      })
      .catch(() => setCargando(false));
  }, []);

  return (
    <aside>
      <h2 className="fixture-titulo"><FaHockeyPuck className="icono-titulo" /> Próximos partidos</h2>
      <div className="fixture-widget">
      {cargando && <p>Cargando...</p>}
      {Object.entries(partidosPorFecha).map(([fecha, partidos]) => (
        <div key={fecha} className="fw-fecha">
          <h3>{fecha}</h3>
          {partidos.map((p, i) => (
            <div key={i} className="fw-partido">
              {p.categoria && <span className="fw-categoria">{p.categoria}</span>}
              <p className="fw-equipos">{p.equipoLocal} vs {p.equipoVisitante}</p>
              <p className="fw-hora">{p.hora} hs</p>
              {p.ubicacion && <p className="fw-ubicacion">📍 {p.ubicacion}</p>}
            </div>
          ))}
        </div>
      ))}
      </div>
    </aside>
  );
}
