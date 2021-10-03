import React from "react";

import './Button.css';

function Button(props) {
    const className = (props.className)
    ? props.className + "float-end"
    : "float-end";

    return (
        <button
            className={className}
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default Button;