import React from "react";
import './TodoCounter.css';

function TodoCounter({ total, completed }){
    return (
        <h2 className="todocount">
            Ya tienes { completed } de {total} tareas completadas
        </h2>
    );
}

export { TodoCounter };