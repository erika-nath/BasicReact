import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter(){
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    return (
        <h2 className="todocount">
            Ya tienes { completedTodos } de {totalTodos} tareas completadas
        </h2>
    );
}

export { TodoCounter };