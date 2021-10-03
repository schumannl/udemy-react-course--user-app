import React from "react";

function Card(props) {
    return (
        <div className='d-flex justify-content-center'>
            <div className='bg-light rounded p-1 mt-2'>{props.children}</div>
        </div>
    );
}

export default Card;