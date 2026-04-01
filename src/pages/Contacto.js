import React from 'react';
import "./Contacto.css";

export default function Contacto() {
  return (
    <div className="contacto-container">
      <h1>Vení a jugar con nosotros</h1>

      <div className="contacto-grid">

        {/* Menores */}
        <div className="contacto-card">
          <h2>Menores</h2>

          <div className="horario-grupo">
            <span className="categoria-badge">SUB 8 - SUB 10 - SUB 12</span>
            <p>🕐 Lunes y Viernes · 18:30 a 19:30 hs</p>
          </div>

          <div className="horario-grupo">
            <span className="categoria-badge">SUB 14 · SUB 16</span>
            <p>🕐 Lunes y Viernes · 19:30 a 20:30 hs</p>
          </div>

          <p className="ubicacion-texto">📍 Gimnasio CEM 99 · Rolando 1601</p>
        </div>

        {/* Mayores */}
        <div className="contacto-card">
          <h2>Mayores</h2>

          <div className="horario-grupo">
            <p>🕐 Lunes · 22:00 a 23:00 hs</p>
            <p className="ubicacion-texto">📍 New Lawn · Alemania 274</p>
          </div>

          <div className="horario-grupo">
            <p>🕐 Viernes · 18:30 a 20:30 hs</p>
            <p className="ubicacion-texto">📍 Gimnasio CEM 99 · Rolando 1601</p>
          </div>

          <p className="nota">Primera damas, caballeros y jugadores federados. ¡Consultanos!</p>
        </div>

        {/* Contacto */}
        <div className="contacto-card contacto-info">
          <h2>Contacto</h2>
          <p>📞 <strong>294 467-7439</strong></p>
          <p>✉️ Huemuleshockeyclub@gmail.com</p>
          <p>
            Seguinos{" "}
            <a
              className="instagram-link"
              href="https://www.instagram.com/huemuleshcbariloche/"
              target="_blank"
              rel="noopener noreferrer"
            >
              en Instagram
            </a>
          </p>
        </div>

      </div>

      {/* Mapas */}
      <div className="mapas-container">
        <div className="mapa-card">
          <p className="mapa-label">📍 Gimnasio CEM 99</p>
          <iframe
            title="Ubicación ESRN 99"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d629.9999145719903!2d-71.30866983430235!3d-41.14753635147278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b410070b1e5%3A0xa7d1445c2c90f21a!2sESRN%20N%C2%B0%2099!5e1!3m2!1ses-419!2sar!4v1750252949167!5m2!1ses-419!2sar"
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mapa-card">
          <p className="mapa-label">📍 New Lawn</p>
          <iframe
            title="Ubicación New Lawn"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d891.0378629250425!2d-71.32088537149967!3d-41.14139527734489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b10dd2e89bb%3A0xe053378f9b056aac!2sNew%20Lawn!5e1!3m2!1ses-419!2sar!4v1750253787470!5m2!1ses-419!2sar"
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

    </div>
  );
}
