import { useState } from "react";
import "./AddUser.css";

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState(0);

  const AddUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
  };

  const usernameChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    //   console.log(event.target.value);
      setEnteredAge(event.target.value);
  }

  return (
      <form className="AddUserWrapper" onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} />
        <button type="submit">Add User</button>
      </form>
    
  );
};

export default AddUser;
