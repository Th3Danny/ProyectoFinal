import React from "react";
import Boton from "../atomos/boton";
import CardMusic from "../moleculas/cards";
import Style from '../css/Cards.module.css'
import Gears from '../img/Gears_of_War_3_Portada.jpg'
import GTA from '../img/GTA.jpg'
import TheLast from '../img/The-Last-of-Us.jpg'

export default function Games() {
  const whatch = "Games"; // Cambiar a whatch
  const cards = [
    {
      title: "Gears of War 3",
      description: "Gears of War 3 es el tercer videojuego de la Serie Gears of War, desarrollado por Epic Games y distribuido por Microsoft Studios como exclusiva para la consola Xbox 360 el 20 de septiembre de 2011.",
      album: Gears,
    },
    {
      title: "Grand Theft Auto ",
      description: "GTA es una saga con más de 15 títulos ambientados en diferentes escenarios. En todos los casos, un criminal realiza distintas misiones a cambio de dinero. Sus encargos suelen ser asesinar personas, secuestrar hombres adinerados, robar coches, asaltar bancos, etc.",
      album: GTA,
    },
    {
      title: "The last of us",
      description: "Esta historia desgarradora es considerada una de las mejores jamás contadas en un videojuego, donde la relación entre Joel y Ellie le da vida a un mundo en decadencia. .",
      album: TheLast,
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
