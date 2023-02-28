import React, { useEffect, useState } from "react";

function EditableRowClassSelect({
  editCharacterData,
  handleClassSelect,
  setSelectedClass,
}) {
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

  useEffect(() => {
    editCharacterData.class !== undefined
      ? setSelectedClass(editCharacterData.class)
      : null;
  }, []);

  return (
    <>
      <select
        id="characterClass"
        onChange={(e) => handleClassSelect(e)}
        required
      >
        {editCharacterData.class !== undefined ? (
          <option defaultValue={editCharacterData.class}>
            {editCharacterData.class}
          </option>
        ) : (
          <option value="" hidden>
            Choose a class
          </option>
        )}

        {wowClasses
          .filter((item) => item !== editCharacterData.class)
          .map((characterClass, index) => (
            <option key={index} value={characterClass}>
              {characterClass}
            </option>
          ))}
      </select>
    </>
  );
}

export default EditableRowClassSelect;
