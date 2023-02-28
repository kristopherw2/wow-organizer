import React, { useState } from "react";

function ClassSelect({ editCharacterData, handleClassSelect }) {
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

  return (
    <>
      <select
        id="characterClass"
        onChange={(e) => handleClassSelect(e)}
        required
      >
        <option value="" hidden>
          Choose a class
        </option>

        {wowClasses.map((characterClass, index) => (
          <option key={index} value={characterClass}>
            {characterClass}
          </option>
        ))}
      </select>
    </>
  );
}

export default ClassSelect;
