import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI(){
    const {error,loading,searchedTodos,completeTodo,deleteTodo} = React.useContext(TodoContext);

return(
<React.Fragment>
    <TodoCounter />
    <TodoSearch />
    
        <TodoList>
        {error && <p>Upps hubo un error 😞</p>}
        {loading && <p>Se esta cargando,espera😉 </p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer todo 😎</p>}

        {searchedTodos.map(todo => (
        <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={()=> completeTodo(todo.text)}
            onDelete={()=> deleteTodo(todo.text)}

        />
        ))}
    </TodoList> 

    <CreateTodoButton />
</React.Fragment>
    );
}

export {AppUI};