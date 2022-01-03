import React from "react";

function TodoList(props) {
    return(
       <section>
           {props.children}
       </section>
    );
}
// props.children es la iteracion de los todos que estan ddentro de TodoList
export {TodoList};