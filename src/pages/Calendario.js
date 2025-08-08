import React from 'react';
import "./Calendario.css";

export default function Calendario() {
  return (
    <div className='calendario-container'>
      <h1>Próximas fechas</h1> 

      <div className="dia-partidos">
        <h2>Sábado 09 de Agosto</h2>
        <h3>Damas</h3>
        <p>Huemules B vs Patagon</p>
        <p>10:00 hs</p>
        <h3>Caballeros</h3>
        <p>Huemules vs Esc Municipal B</p>
        <p>20:00 hs</p>
        <h3>Polideportivo Dina Huapi</h3>
      </div>

      <div className="dia-partidos">
        <h2>Domingo 10 de Agosto</h2>
        <h3>Damas</h3>
        <p>Huemules A vs Pehuenes</p>
        <p>10:00 hs</p>
        <h3>Caballeros</h3>
        <p>Huemules vs Lacar</p>
        <p>13:00 hs</p>
        <h3>Polideportivo Dina Huapi</h3>
      </div>
    </div>
  );
}