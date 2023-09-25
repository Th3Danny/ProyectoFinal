import React from "react";
import Style from "../css/Boton.module.css"
export default function Boton(props) {
    return (
    <button className={Style.btn}>
      {props.whatch} 
    </button>
  );
}