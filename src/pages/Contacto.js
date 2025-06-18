import React from 'react';
import "./Contacto.css";

export default function Contacto() {
  return (
    <div className="contacto-container">
      <h1>Vení a jugar con nosotros!!</h1>
      <h2>Menores</h2>
      <p>Jueves 20 a 21 hs - Viernes 18:30 a 19:30 hs</p>
      <p>Gimnasio Cem 99 - Rolando 1601</p>

    
      <h2>Mayores</h2>
      <p>Lunes 22 a 23 hs</p>
      <p>New Lawn - Alemania 274</p>
      <p>Jueves 21 a 22:30 hs</p>  
      <p>Gimnasio Cem 99 - Rolando 1601</p>
      <p>Primera damas, caballeros y jugadores federados. Consultanos!!</p>
      <h3>Teléfono: 294 467-7439 </h3>

      <h3>Mail: algooo@gmail.com - Seguinos{" "}
        <a href="https://www.instagram.com/huemuleshcbariloche/" target="_blank" rel="noopener noreferrer">
          en Instagram
        </a>
      </h3>

      <div className='mapas-container'>
        <div className="mapa_1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d629.9999145719903!2d-71.30866983430235!3d-41.14753635147278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b410070b1e5%3A0xa7d1445c2c90f21a!2sESRN%20N%C2%B0%2099!5e1!3m2!1ses-419!2sar!4v1750252949167!5m2!1ses-419!2sar"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className='mapa_2'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d891.0378629250425!2d-71.32088537149967!3d-41.14139527734489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b10dd2e89bb%3A0xe053378f9b056aac!2sNew%20Lawn!5e1!3m2!1ses-419!2sar!4v1750253787470!5m2!1ses-419!2sar" 
            width="100%" 
            height="200" 
            style={{ border: 0 }} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

      </div>
      


    </div>
  );
}
