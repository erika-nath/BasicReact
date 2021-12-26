//React es declarativo a comparacion de JS que es imperativo
//EJEMPLO EN JS 
/*const h1 = document.createElement("h1")
h1.textContent="Esto es un ejemplo en Vanilla que es imperativo, tambien son más lineas."
h1.className = "header"
document.getElementById("root").append(h1)*/

//Ejemplo con REACT: se van a reducir las lineas de codigo**

ReactDOM.render(<h1 className="header">Declarativo con React!!</h1>, document.getElementById("root"))