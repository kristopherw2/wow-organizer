import React, { useContext, useEffect, useState } from "react";
import ClassSelect from "./ClassSelect";
import GearCount from "./GearCount";
import TierDropDown from "./TierDropDown";
import TokenDropdown from "./TokenDropDown";

function CharacterForm(props) {
  let [selectedClass, setSelectedClass] = useState();
  let [gearCount, setGearCount] = useState({
    head: 0,
    shoulders: 0,
    chest: 0,
    gloves: 0,
    legs: 0,
  });

  const handleChange = (e) => {
    return e.target.value;
  };

  useEffect(() => {}, [selectedClass]);

  const handleClassSelect = (e) => {
    console.log(e.target.value);
    setSelectedClass(e.target.value);
  };

  const handleTokenCount = (e) => {
    let updatedCount = { ...gearCount };
    if (
      e.target.id === "head" &&
      e.target.value === "Yes" &&
      updatedCount.head < 1
    ) {
      updatedCount.head = 1;
      setGearCount(updatedCount);
    } else if (
      e.target.id === "head" &&
      e.target.value === "No" &&
      updatedCount.head > 0
    ) {
      updatedCount.head = 0;
      setGearCount(updatedCount);
    } else if (
      e.target.id === "shoulders" &&
      e.target.value === "Yes" &&
      updatedCount.shoulders < 1
    ) {
      updatedCount.shoulders = 1;
      setGearCount(updatedCount);
    } else if (
      e.target.id === "shoulders" &&
      e.target.value === "No" &&
      updatedCount.shoulders > 0
    ) {
      updatedCount.shoulders = 0;
      setGearCount(updatedCount);
    } else if (
      e.target.id === "chest" &&
      e.target.value === "Yes" &&
      updatedCount.chest < 1
    ) {
      updatedCount.chest = 1;
      setGearCount(updatedCount);
    } else if (
      e.target.id === "chest" &&
      e.target.value === "No" &&
      updatedCount.chest > 0
    ) {
      updatedCount.chest = 0;
      setGearCount(updatedCount);
    } else if (
      e.target.id === "gloves" &&
      e.target.value === "Yes" &&
      updatedCount.gloves < 1
    ) {
      updatedCount.gloves = 1;
      setGearCount(updatedCount);
    } else if (
      e.target.id === "gloves" &&
      e.target.value === "No" &&
      updatedCount.gloves > 0
    ) {
      updatedCount.gloves = 0;
      setGearCount(updatedCount);
    } else if (
      e.target.id === "legs" &&
      e.target.value === "Yes" &&
      updatedCount.legs < 1
    ) {
      updatedCount.legs = 1;
      setGearCount(updatedCount);
    } else if (
      e.target.id === "legs" &&
      e.target.value === "No" &&
      updatedCount.legs > 0
    ) {
      updatedCount.legs = 0;
      setGearCount(updatedCount);
    }
    return gearCount;
  };

  return (
    <form
      onSubmit={(e) => {
        props.handleCharacterSubmits(e);
      }}
    >
      <label htmlFor="characterName">Enter Character Name: </label>
      <input
        id="characterName"
        type="text"
        onChange={handleChange}
        placeholder="Enter character name"
        required
      />
      <label htmlFor="characterClass">Choose a class: </label>
      <ClassSelect id="characterClass" handleClassSelect={handleClassSelect} />
      <label htmlFor="characterToken">Token: </label>
      <TokenDropdown id="characterToken" selectedClass={selectedClass} />
      <TierDropDown handleTokenCount={handleTokenCount} />
      <GearCount id="characterGearCount" gearCount={gearCount} />
      <button>Add</button>
    </form>
  );
}

export default CharacterForm;
