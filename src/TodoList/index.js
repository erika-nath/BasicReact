import React from "react";
import "./TodoList.css";

function TodoList(props) {
    return(
    <section>
    <ul>{props.children}</ul>
    </section>
    );
}
// props.children es la iteracion de los todos que estan ddentro de TodoList
export {TodoList};