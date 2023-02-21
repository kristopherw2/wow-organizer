import React, { useState } from "react";

function ClassSelect() {
  const wowClasses = [
    "Warrior",
    "Paladin",
    "Hunter",
    "Rogue",
    "Priest",
    "Shaman",
    "Mage",
    "Warlock",
    "Monk",
    "Druid",
    "Demon Hunter",
    "Death Knight",
    "Evoker",
  ];

  let handlClassesChange = (e) => {
    return e.target.value;
  };

  let [wowClass, setClass] = useState();

  return (
    <>
      <label htmlFor="characterClass">Choose a class: </label>
      <select id="characterClass" onChange={handlClassesChange}>
        <option>Choose a class</option>
        {wowClasses.map((characterClass, index) => (
          <option key={index} value={characterClass.value}>
            {characterClass}
          </option>
        ))}
      </select>
    </>
  );
}

export default ClassSelect;
