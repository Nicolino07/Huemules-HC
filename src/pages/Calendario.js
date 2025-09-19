import React from 'react';
import "./Calendario.css";

export default function Calendario() {
  return (
    <div className='calendario-container'>
      <h1>Próximas fechas</h1> 

      <div className="dia-partidos">
        <h2>Sábado 30 Septiembre</h2>
        <h3>Damas</h3>
        <p>Huemules B vs Huemules A</p>
        <p>14:00 hs</p>
        <p>El Bolson A vs Huemules B</p>
         <p>18:00 hs</p>
        <p>El Bolson B vs Huemules A</p>
         <p>19:00 hs</p>
        <h3 className="ubicacion">New Lawn</h3>
      </div>
  

      
    </div>
  );
}