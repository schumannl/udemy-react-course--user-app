function ListItem(props) {
    return (
        <p>
            <strong>{props.name}</strong> is years old <i>{props.age}</i>.
        </p>
    );
}

export default ListItem;