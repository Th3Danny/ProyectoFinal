import React from "react";
import Style from '../css/Descripcion.module.css'
export default function Descripcion(props) {
  return (
    <div> 
      <p className={Style.card__description}>{props.description}</p>
    </div>
  );
}
