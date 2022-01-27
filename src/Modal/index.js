import React from "react";
import reactDom from "react-dom";

function Modal({children}){
    return reactDom.createPortal(
            props.children,
            document.getElementById('modal')
            
        
    );
}

export {Modal};