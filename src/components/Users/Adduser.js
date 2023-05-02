import React, { useState } from 'react';
import Card from '../UI/Card';

import styles from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {

  const [inputUsername, setInputUsername] = useState('');
  const [inputAge, setInputAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();

    if (inputUsername.trim().length === 0 || inputAge.trim().length === 0) {
      return;
    }
    if (+inputAge < 1) {
      return;
    }

    console.log(inputUsername, inputAge);

    setInputUsername('');
    setInputAge('');
  }

  const usernameChangeHandler = (event) => {
    setInputUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  }

  return (
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
        <input id='age' type='number' value={inputAge} onChange={ageChangeHandler} />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser;