import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}){

    return(
        <React.Fragment>
    <TodoCounter
    total={totalTodos}
    completed={completedTodos}
    />
    <TodoSearch 
    searchValue={searchValue}
    setSearchValue={setSearchValue}
/>
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