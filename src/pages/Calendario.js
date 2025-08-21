import React from 'react';
import "./Calendario.css";

export default function Calendario() {
  return (
    <div className='calendario-container'>
      <h1>Próximas fechas</h1> 

      <div className="dia-partidos">
        <h2>Sábado 23 de Agosto</h2>
        <h3>Damas</h3>
        <p>Huemules B vs Bolson B</p>
        <p>18:00 hs</p>
        <h3 className="ubicacion">New Lawn</h3>
        <h3>Caballeros</h3>
        <p>Huemules vs Estudiantes</p>
        <p>14:00 hs</p>
        <p>Huemules vs Esc. Municipal A</p>
        <p>20:00 hs</p>
        <h3 className="ubicacion">Polideportivo Dina Huapi</h3>
      </div>

      <div className="dia-partidos">
        <h2>Domingo 24 de Agosto</h2>
        <h3>Caballeros</h3>
        <p>Huemules vs Hualas</p>
        <p>14:30 hs</p>
        <h3>Damas</h3>
        <p>Huemules A vs Lacar</p>
        <p>15:30 hs</p>
        <h3 className="ubicacion">Polideportivo Dina Huapi</h3>
      </div>
    </div>
  );
}