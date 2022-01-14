import React from "react";
import "./TodoSearch.css";

function TodoSearch({searchValue, setSearchValue}){
    //función evento del input, cambia el estado
const searchValueChange= (event) =>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

return(
    <input className="TodoSearch"
    placeholder="Todos"
    //valor del input se conecta con la variable del estado que se va a ir actualizando 
    value={searchValue}
    //evento del buscador,con el nuevo estado
    onChange={searchValueChange}
    />
    );
}

export {TodoSearch};