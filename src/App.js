import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
//import './App.css';

//Primero se identifican los componentes que se van a utilizar
// se identifica que elementos tendra cada componente y su funcionamiento

//se crea una const con un array con los todos los cuales tienen sus propiedades
const todos = [
  { text:"Revisar correo", completed: true  },
  { text:"Ir al super", completed: false },
  { text:"Agendar al dentista", completed: false },
]


function App() {
  return (
    <React.Fragment>
    <TodoCounter />
    <TodoSearch />

   <TodoList>
     {todos.map(todo => (
      <TodoItem 
      key={todo.text} 
      text={todo.text} 
      completed={todo.completed}
      />
    ))}
    </TodoList> 

    <CreateTodoButton />
    </React.Fragment>
  );
}
// los {} son para escribir js en jsx
//dentro de  TodoList se van a iterar los todos ,por cada elemento cada todo se va a renderizar
// para comentar los commponentes se utiliza {/*....*/}
//key se utiliza para identificar que esta renderizando en una lista de elementos

export default App;
