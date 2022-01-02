//import './App.css';[

import React from "react";

//Primero se identifican los componentes que se van a utilizar
// se identifica que elementos tendra cada componente y su funcionamiento

//se crea una const con un array con los todos los cuales tienen sus propiedades
const todos = [
  { text:"Revisar correo", completed: false },
  { text:"Ir al super", completed: false },
  { text:"Agendar al dentista", completed: false },
]


function App() {
  return (
    <React.Fragment>
    {/*<TodoCounter />*/}
    <h2>Has completoado 2 de 3 ToDo's</h2>
    {/*<TodoSearch />*/}
    <input placeholder="Cebolla" />
    {/* <TodoList>{todos.map(todo =>(
      <TodoItem />
    ))}
    </TodoList> */}
    {/*<CreateTodoButton />*/}
    <button>+</button>
    </React.Fragment>
  );
}
// los {} son para escribir js en jsx
//dentro de  TodoList se van a iterar los todos ,por cada elemento cada todo se va a renderizar
// para comentar los commponentes se utiliza {/*....*/}

export default App;
