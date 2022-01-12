import React from "react";
import "./TodoSearch.css";

function TodoSearch(){
    const searchValue = (event) =>{
        console.log(event.target.value);
    };

return(
    <input className="TodoSearch" 
    placeholder="Cebolla"
    onChange={searchValue}
    
    />

);
}

export {TodoSearch};