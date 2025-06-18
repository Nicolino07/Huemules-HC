import React, { useState } from "react";
import galeriaImages from "../components/GaleriaArray";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./Galeria.css";

export default function Galeria() {
  const [index, setIndex] = useState(-1);

  const slides = galeriaImages.map((img) => ({ src: img.src, alt: img.alt }));

  return (
    <div className="galeria-container">
      <h1>Huemules en fotos</h1>
      <div className="galeria-grid">
        {galeriaImages.map((imagen, i) => (
          <div key={imagen.id} className="galeria-item" onClick={() => setIndex(i)}>
            <img src={imagen.src} alt={imagen.alt} />
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        index={index}
        render={{
          buttonPrev: () => null, // si querés, podemos agregar botones custom
          buttonNext: () => null,
        }}
      />
    </div>
  );
}
