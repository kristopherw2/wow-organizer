import React, { useState } from "react";
import ClassSelect from "./ClassSelect";
import TierDropDown from "./TierDropDown";

function CharacterForm(props) {
  const handleChange = (e) => {
    return e.target.value;
  };

  return (
    <form
      onSubmit={(e) => {
        props.handleCharacterSubmits(e);
      }}
    >
      <label htmlFor="characterName">Enter Character Name: </label>
      <input id="characterName" type="text" onChange={handleChange} required />
      <ClassSelect />
      <TierDropDown />
      <button>Submit</button>
    </form>
  );
}

export default CharacterForm;
