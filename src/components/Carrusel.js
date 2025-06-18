import React, { useState, useEffect } from 'react';

const images = [
  '/images/img_07.jpg',
  '/images/img_08.jpg',
  '/images/img_02.jpg',
  '/images/img_03.jpg',
  '/images/img_04.jpg',
  // Agrega más rutas según tus imágenes
];

function Carrusel() {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndice((prev) => (prev + 1) % images.length);
    }, 3000); // cambia imagen cada 3 segundos

    return () => clearInterval(interval); // limpia el intervalo al desmontar
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={images[indice]}
        alt={`Foto ${indice + 1}`}
        style={{ width: '500px', height: 'auto', borderRadius: '10px' }}
      />
    </div>
  );
}

export default Carrusel;
