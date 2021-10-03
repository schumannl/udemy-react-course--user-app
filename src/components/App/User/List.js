import React from "react";

import Card from "../../Ui/Card";
import ListItem from "./ListItem";

function List(props) {
    function displayUser(user) {
        return <ListItem key={user.id} name={user.name} age={user.age} />;
    }

    function displayNoUser() {
        return <p>No user yet. You can add one by filling the form.</p>
    }

    function getListContents() {
        return (props.users.length > 0)
        ? props.users.map(displayUser)
        : displayNoUser();
    }

    return (
        <Card>{getListContents()}</Card>
    );
}

export default List;