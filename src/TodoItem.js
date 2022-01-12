import React from "react";
import "./TodoItem.css"

function TodoItem(props) {
    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>✓</span>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span className="Icon Icon-delete">X</span>
        </li>
    );
}
//props.text es la propiedad de los todos,para renderizar lo que contiene cada todo
export { TodoItem };