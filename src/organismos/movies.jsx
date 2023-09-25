import React from "react";
import CardMovie from "../moleculas/cards";
import Boton from "../atomos/boton";
import FNAF from "../img/five_nights_at_freddys_ver6.jpg";
import Barbie from "../img/barbie.jpg";
import Pollitos from "../img/chicken_run.jpg";
import Style from '../css/Cards.module.css';

function Movies() {
  const whatch = "Movies";

  // Función para redirigir a una nueva página
  const redirectToNewPage = () => {
    window.location.href = "../templates/moviesPage.jsx"; // Reemplaza "/moviesPage" con la URL deseada
  };

  const cards = [
    {
      title: "Five Nights at Freddy's",
      description: "Five Nights at Freddy's (a menudo abreviado como FNAF) es una franquicia de medios basada en una serie de videojuegos de terror independientes, creada, diseñada, desarrollada y publicada por Scott Cawthon.",
      album: FNAF,
    },
    {
      title: "Barbie",
      description: "Taquilla de 'Barbie' 'Barbie' llegó a los cines este 20 de julio de 2023, el mismo día en que Universal ha estrenó otro de los bombazos (nunca mejor dicho) del año: 'Oppenheimer', la nueva película de Christopher Nolan, que sigue la historia del padre de la bomba atómica.",
      album: Barbie,
    },
    {
      title: "Pollitos en fuga",
      description: "“Habiendo logrado desafiar a la muerte escapando de la Granja de Tweedy, Ginger finalmente ha encontrado su sueño: una pacífico santuario en una isla para toda la bandada, lejos de los peligros del mundo humano.",
      album: Pollitos,
    },
  ];

  return (
    <div>
       <Boton whatch={whatch} onClick={redirectToNewPage} />
       <div className={Style.row}>
        {cards.map((card, index) => (
          <CardMovie
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

export default Movies;
