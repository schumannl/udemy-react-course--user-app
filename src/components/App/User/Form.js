import { useState } from 'react';
import Button from '../../Ui/Button';
import Card from '../../Ui/Card';

function Form(props) {
    const [name, setName] = useState(props.nameDefault);
    const [age, setAge] = useState(props.ageDefault);

    function nameChangeHandler(event) {
        setName(event.target.value);
    }

    function ageChangeHandler(event) {
        setAge(event.target.value);
    }

    function onSubmitHandler(event) {
        event.preventDefault();
        props.onAddUser(createUser());
        resetFormValues();
    }

    function createUser() {
        return {
            id: Math.random().toString(),
            name: name,
            age: age 
        };
    }

    function resetFormValues() {
        setName(props.nameDefault);
        setAge(props.ageDefault);
    }

    return (
        <Card>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text"
                        name="name"
                        value={name}
                        onChange={nameChangeHandler}
                    />
                </p>
                <p>
                    <label htmlFor="age">Age: </label>
                    <input
                        type="number"
                        min="0"
                        step={props.ageStep}
                        name="age"
                        value={age}
                        onChange={ageChangeHandler}
                    />
                </p>
                <Button type="submit">Add user</Button>
            </form>
        </Card>
    );
}

export default Form;