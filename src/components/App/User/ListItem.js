import React from "react";

function ListItem(props) {
    return (
        <p>
            <strong>{props.name}</strong> is year(s) old <i>{props.age}</i>.
        </p>
    );
}

export default ListItem;