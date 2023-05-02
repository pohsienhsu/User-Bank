import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const DUMMY_USERS = [
  {username: 'Jona', age: 27, id: Math.random().toString()},
  {username: 'Laura', age: 25, id: Math.random().toString()}
]

function App() {

  const [usersList, setUsersList] = useState(DUMMY_USERS);

  const addUserHandler = (username, age) => {
    setUsersList((prev) => {
      return [...prev, {username: username, age: age, id: Math.random().toString()}];
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </div>

  );
}

export default App;
