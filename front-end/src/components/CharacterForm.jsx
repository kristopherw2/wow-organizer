import React, { useState } from "react";
import ClassSelect from "./ClassSelect";
function CharacterForm(props) {
  let [enteredName, setEnteredName] = useState();

  const handleChange = (e) => {
    return e.target.value;
  };

  return (
    <form onSubmit={props.handleCharacterSubmits}>
      <label htmlFor="characterName">Enter Character Name: </label>
      <input id="characterName" type="text" onChange={handleChange} />
      <ClassSelect />
      <button>Submit</button>
    </form>
  );
}

export default CharacterForm;
