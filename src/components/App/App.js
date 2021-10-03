import { useState } from 'react';
import Modal from '../Ui/Modal';
import UserForm from './User/Form';
import UserList from './User/List';

const FORM_INPUT_AGE_DEFAULT = 0;
const FORM_INPUT_AGE_STEP = 1;
const FORM_INPUT_NAME_DEFAULT = '';
const USERS = [];

function App() {
  const [users, setUsers] = useState(USERS);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [modal, setModal] = useState();

  function addUserHandler(newUser) {
    setUsers(function (previousState){
      return [
        newUser,
        ...previousState
      ];
    });
  }

  function registerError(error) {
    setModal({
      title: error.title,
      message: error.message
    });
    setIsModalDisplayed(true);
  }

  function hideModal() {
    setIsModalDisplayed(false);
  }

  return (
    <>
      <UserForm
        ageDefault={FORM_INPUT_AGE_DEFAULT}
        ageStep={FORM_INPUT_AGE_STEP}
        nameDefault={FORM_INPUT_NAME_DEFAULT}
        onAddUser={addUserHandler}
        onInvalidData={registerError}
      />
      <UserList users={users} />
      {isModalDisplayed && <Modal title={modal.title} message={modal.message} onCtaClick={hideModal}></Modal>}
    </>
  );
}

export default App;
