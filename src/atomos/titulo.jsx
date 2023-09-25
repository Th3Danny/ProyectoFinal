import React from "react";
import Style from '../css/Titulo.module.css'
export default function Descripcion(props) {
  return (
    <div>
      <p className={Style.card__title}>{props.description}</p>
    </div>
  );
}
