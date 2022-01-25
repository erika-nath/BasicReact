import React from "react";
import { AppUI } from "./AppUI";

/*const defaultTodos = [
  { text:"Revisar correo", completed: false  },
  { text:"Ir al super", completed: true },
  { text:"Agendar al dentista", completed: false },
]*/
//creaando propio hook
 /*useLocalStorage=>{

};*/
function useLocalStorage(itemName,initialValue){
  const[error,setError] = React.useState(false);
  const[loading,setLoading] = React.useState(true);
  const[item,setItem] = React.useState(initialValue);


  React.useEffect(()=>{
    setTimeout(()=>{
      try{
        const localStorageItem= localStorage.getItem(itemName);
      let parsedItem;
  
      if (!localStorageItem){
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItem = initialValue;
      } else {
        parsedItem= JSON.parse(localStorageItem);
      }

      setItem(parsedItem);
      setLoading(false);
      }  catch (error){
          setError(error);
      }
    },1000);
  });

  


  const saveItem = (newItem) =>{
    try{
      const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName,stringifiedItem);
    setItem(newItem);

    } catch (error) {
      setError(error);
    }
  };

  //retorna los estados que estamos utilizando y como son + de 2 se agrega como objeto
  return{
    item,
    saveItem,
    loading,
    error,
  };
  

}

function App() {
  //se renombran 
const {
  item:todos,
  saveItem: saveTodos,
  loading,
  error,
}= useLocalStorage('TODOS_V1', []);


  
const[searchValue, setSearchValue]= React.useState('');
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
    loading={loading}
    error={error}
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    
    />
    )
}
export default App;
