import React from "react";
import "./TodoItem.css"

function TodoItem(props) {
    
    const onComplete = () =>{
        alert("ya completate el todo" + props.text);
    };

    const onDelete = () =>{
        alert("ya borraste el todo" + props.text);
    };
    

    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={onComplete}
            >✓</span>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            
            <span className="Icon Icon-delete"
            onClick={onDelete}
            >X</span>
        </li>
    );
}
//props.text es la propiedad de los todos,para renderizar lo que contiene cada todo
export { TodoItem };