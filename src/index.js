import React from "react";
import ReactDOM from "react-dom";

function Lista()  {
return(
    <div>
        <h1>Lista Super</h1>
        <h2>Aseo personal</h2>
            <ul>
                <img src={require ("./aseo.jpg")}  width={("280px")}/>
                <li>Jabon de tocador</li>
                <li>Nueva esponja</li>
                <li>Shampoo</li>
                <li>Pasta de dientes</li>
        </ul>
        <h2>Comida</h2>
            <ul>
                <img src={require("./comida.jpg")} width={("280px")}/>
                <li>Jamon</li>
                <li>Pan de caja</li>
                <li>Queso</li> 
            </ul>
        <h2>Bebidas</h2>
            <ul>
                <img src={require("./bebidas.jpg")} width={("280px")}/>
                <li>Jugo arandanos</li>
                <li>Vodka</li>
                <li>Jugo de limon</li>
            </ul>
    </div>
)}

ReactDOM.render(<Lista />, document.getElementById("root"))