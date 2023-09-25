import React from "react";
import Movies from "../organismos/movies";
import Music from "../organismos/music";
import Games from "../organismos/games";
import Tienda from "../atomos/nombreTienda";
function blog (){
    return(
        <div>
        <Tienda/>   
        <Movies/>
        <Music/>
        <Games/>
        </div>
        
    );

}
export default blog;