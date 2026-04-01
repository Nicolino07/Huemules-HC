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

const MESES = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const DIAS = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];

function formatearFecha(fecha) {
  const partes = fecha.trim().split("/");
  if (partes.length !== 3) return fecha;
  const [dia, mes, anio] = partes;
  const anioCompleto = anio.trim().length === 2 ? `20${anio.trim()}` : anio.trim();
  const date = new Date(`${anioCompleto}-${mes.trim().padStart(2,'0')}-${dia.trim().padStart(2,'0')}T12:00:00`);
  if (isNaN(date.getTime())) return fecha;
  return `${DIAS[date.getDay()]} ${dia.trim()} ${MESES[date.getMonth()]}`;
}

function agruparPorFecha(partidos) {
  return partidos.reduce((acc, partido) => {
    if (!acc[partido.fecha]) acc[partido.fecha] = [];
    acc[partido.fecha].push(partido);
    return acc;
  }, {});
}

export default function Calendario() {
  const [partidosPorFecha, setPartidosPorFecha] = useState({});
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.text())
      .then((texto) => {
        setPartidosPorFecha(agruparPorFecha(parsearCSV(texto)));
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

      {Object.entries(partidosPorFecha).map(([fecha, partidos]) => (
        <div key={fecha} className="dia-partidos">
          <h2>{formatearFecha(fecha)}</h2>
          {partidos.map((p, i) => (
            <div key={`${fecha}-${i}`} className="partido">
              <div className="partido-header">
                {p.categoria && <span className="categoria-badge">{p.categoria}</span>}
              </div>
              <div className="partido-equipos">
                <span className="equipo local">{p.equipoLocal}</span>
                <span className="vs-badge">VS</span>
                <span className="equipo visitante">{p.equipoVisitante}</span>
              </div>
              <div className="partido-info">
                {p.hora && (
                  <span className="partido-hora">🕐 {p.hora} hs</span>
                )}
                {p.ubicacion && (
                  <span className="partido-ubicacion">📍 {p.ubicacion}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
