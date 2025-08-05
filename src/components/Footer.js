import React from "react";
import { FaLink, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const paginasAmigas = [
    {
      nombre: "Hockey Bariloche",
      url: "https://www.hockeybariloche.com.ar", // Reemplaza con tu URL
      descripcion: ""
    }
    
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Sección de páginas amigas */}
        <div className="paginas-amigas">
          <h4>Páginas amigas <FaLink /></h4>
          <ul>
            {paginasAmigas.map((pagina, index) => (
              <li key={index}>
                <a 
                  href={pagina.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  {pagina.nombre} <FaExternalLinkAlt className="icono-externo" />
                </a>
                <p className="descripcion">{pagina.descripcion}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright y contacto */}
        <div className="footer-info">
          <p>
            © 2025 Huemules Hockey Club - Desarrollado por{" "}
            <a 
              href="mailto:elias.nicolas.vargas@gmail.com" 
              className="footer-link"
            >
              <FaEnvelope /> NicolinoloccheV
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}