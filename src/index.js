import React from "react"
import ReactDOM from "react-dom"
// importar ambas

//variable  page
const page = (
    <div>
        <h1>List of feelings</h1>
        <ol>
            <li>😊 Happy</li>
            <li>😞 Dissappointed</li>
            <li>😢 Crying</li>
            <li>😂 LOL</li>
            <li>😍 In love</li>
            <li>😜 Crazy</li>
        </ol>
    </div>
)

//renderizando la variable en el DOM
ReactDOM.render(page,document.getElementById("root"))
// jsx retorna objetos de js
//document.getElementById("root").append(JSON.stringify(page))


