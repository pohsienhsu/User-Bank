import React, { useState } from 'react';
import Card from '../UI/Card';

import styles from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {

  const [inputUsername, setInputUsername] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

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

    setInputUsername('');
    setInputAge('');
  }

  const usernameChangeHandler = (event) => {
    setInputUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  }

  const dismissErrorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onDismiss={dismissErrorHandler} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username" >Username</label>
          <input
            id='username'
            type='text'
            value={inputUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            id='age'
            type='number'
            value={inputAge}
            onChange={ageChangeHandler}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser;