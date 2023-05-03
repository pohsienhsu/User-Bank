import React, { useState, useRef } from 'react';
import Card from '../UI/Card';

import styles from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const inputUsernameRef = useRef();
  const inputAgeRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const inputUsername = inputUsernameRef.current.value;
    const inputAge = inputAgeRef.current.value;

    if (inputUsername.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      })
      return;
    }
    if (+inputAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please valid age (> 0)",

      })
      return;
    }

    console.log(inputUsername, inputAge);
    props.onAddUser(inputUsername, inputAge);
    inputUsernameRef.current.value = '';
    inputAgeRef.current.value = '';
  }

  const dismissErrorHandler = () => {
    setError(null);
  }

  return (
    <React.Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onDismiss={dismissErrorHandler} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username" >Username</label>
          <input
            id='username'
            type='text'
            ref={inputUsernameRef}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            id='age'
            type='number'
            ref={inputAgeRef}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  )
}

export default AddUser;