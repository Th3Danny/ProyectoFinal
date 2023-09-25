import React from "react";
import CardMusic from "../moleculas/cards";
import Slipknot from '../img/Slipknot_29.jpg'
import Rammstein from '../img/rammstein.jpg'
import Metallica from '../img/metallica.jpg'
import Style from '../css/Cards.module.css'
import Boton from "../atomos/boton";
export default function Music(){
  const whatch = "Musica"; // Cambiar a whatch
  const cards = [
    {
      title: "Rammstein",
      subtitulo: "La buena musica",
      description: "Metallica es una banda estadounidense de thrash metal​ originaria de Los Ángeles, pero con base en San Francisco desde febrero de 1983. Fue fundada en 1981 en Los Ángeles por Lars Ulrich y James Hetfield, a los que se les unirían Dave Mustaine y Ron McGovney.",
      album: Rammstein,
    },
    {
      title: "Slipknot",
      subtitulo: " 1995",
      description: "Slipknot es un grupo de metal que nació en Des Moines, Iowa, en 1995. Su sonido, enormemente influyente e imitado, ha sido definido a veces como metal alternativo, heavy metal o rap metal y destaca por mezclar elementos duros propios del death metal.",
      album: Slipknot,
    },
    {
      title: "Metallica",
      subtitulo: "",
      description: "Metallica es una banda estadounidense de thrash metal​ originaria de Los Ángeles, pero con base en San Francisco desde febrero de 1983. Fue fundada en 1981 en Los Ángeles por Lars Ulrich y James Hetfield, a los que se les unirían Dave Mustaine y Ron McGovney.",
      album: Metallica,
    },
  ];

 
  return (
    <div>
        <Boton whatch={whatch} /> 
       <div className={Style.row}>
      {cards.map((card, index) => (
        <CardMusic
        watch={whatch} 
          key={index}
          title={card.title}
          description={card.description}
          album={card.album}
        />
      ))}
    </div>
    </div>
   
  );
}
