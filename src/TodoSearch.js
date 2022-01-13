import React from "react";
import "./TodoSearch.css";

function TodoSearch(){
    //estado
    const [searchValue, setSearchValue] = React.useState ('');

    //función evento del input, cambia el estado
   const searchValueChange= (event) =>{
        setSearchValue(event.target.value);
    };

return[
    <input className="TodoSearch"
    placeholder="Cebolla"
    //valor del input se conecta con la variable del estado que se va a ir actualizando 
    value={searchValue}
    //evento del buscador,con el nuevo estado
    onChange={searchValueChange}
    />,
    <p>{searchValue}</p>

];
}

export {TodoSearch};