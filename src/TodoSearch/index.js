import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch(){
const {searchValue, setSearchValue} = React.useContext(TodoContext);
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