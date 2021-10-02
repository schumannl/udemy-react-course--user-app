import { useState } from 'react';
import UserForm from './User/Form';
import UserList from './User/List';

const FORM_INPUT_AGE_DEFAULT = 0;
const FORM_INPUT_AGE_STEP = 1;
const FORM_INPUT_NAME_DEFAULT = '';
const USERS = [];

function App() {
  const [users, setUsers] = useState(USERS);

  function addUserHandler(newUser) {
    setUsers(function (previousState){
      return [
        newUser,
        ...previousState
      ];
    });
  }

  return (
    <>
      <UserForm
        ageDefault={FORM_INPUT_AGE_DEFAULT}
        ageStep={FORM_INPUT_AGE_STEP}
        nameDefault={FORM_INPUT_NAME_DEFAULT}
        onAddUser={addUserHandler}
      />

      <UserList users={users} />
    </>
  );
}

export default App;
