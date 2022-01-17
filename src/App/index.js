import React from "react";
import { AppUI } from "./AppUI";

/*const defaultTodos = [
  { text:"Revisar correo", completed: false  },
  { text:"Ir al super", completed: true },
  { text:"Agendar al dentista", completed: false },
]*/

//funcion para guaradr en local storage
function App() {
  //recuperar TODOs
const localStorageTodos = localStorage.getItem('TODOS_V1')
//variable guarda TODOS
let parsedTodos;
//Condicional si hay todos ó no hay
if (!localStorageTodos){
  localStorage.setItem("TODOS_V1",JSON.stringify([]));
  parsedTodos = [];

}else{
  parsedTodos= JSON.parse(localStorageTodos);
}

const [todos, setTodos]= React.useState(parsedTodos);
const[searchValue, setSearchValue]= React.useState("");
// total de completadosy total de todos
const completedTodos = todos.filter(todo=> todo.completed == true).length;
const totalTodos = todos.length;

let searchedTodos=[];
//filtra la busqueda
if(!searchValue.length >=1){
  searchedTodos = todos;
}else{
  searchedTodos = todos.filter(todo =>{
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);

  });
}

//funcion que conecta localstorage con funcion de borrar y marcar TODOS
const saveTodos = (newTodos) =>{
  const stringifiedTodos = JSON.stringify(newTodos);
  //stringifiedTodos es la nueva actualizacion de todos
  localStorage.setItem('TODOS_V1',stringifiedTodos);
  setTodos(newTodos);
};


const completeTodo = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text === text);
  const newTodos = [...todos];
  newTodos [todoIndex].completed = true;
  saveTodos(newTodos);
};


const deleteTodo = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text === text);
  const newTodos =[...todos];
  newTodos.splice(todoIndex, 1);
  saveTodos(newTodos);
};


  return (
    <AppUI 
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    
    />
  );
}
export default App;
