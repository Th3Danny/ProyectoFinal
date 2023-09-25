import React from "react";
import Style from '../css/Cards.module.css'

function CardMusic(props) {
  const { title, description, subtitulo, album } = props;
  return (
    <div className={Style.contenedor}>
      <article className={Style.card}>
        <div className={Style.disco}>
          <img src={album} alt="" />
        </div>
        <div className={Style.card_content}>
          <span className={Style.card_title}>{title}</span>
          <span className={Style.card_subtitle}>{subtitulo}</span>
          <p className={Style.card_description}>{description}</p>
        </div>
      </article>
    </div>
  );
}

export default CardMusic;
