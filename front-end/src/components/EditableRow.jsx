import React, { useEffect, useState } from "react";

import EditableRowClassSelect from "./EditableRowClassSelect";
import EditableRowTierDropDown from "./EditableRowTierDropDown";
import EditableRowGearCount from "./EditableRowGearCount";
import TokenDropdown from "./TokenDropDown";

const EditableRow = (props) => {
  let [selectedClass, setSelectedClass] = useState();
  let [gearCount, setGearCount] = useState({
    head: 0,
    shoulders: 0,
    chest: 0,
    gloves: 0,
    legs: 0,
  });

  useEffect(() => {
    loadGearCount();
  }, []);

  const loadGearCount = () => {
    let charData = { ...props.editCharacterData };
    let { head, shoulders, chest, gloves, legs } = charData;

    let oldObj = {
      head: head,
      shoulders: shoulders,
      chest: chest,
      gloves: gloves,
      legs: legs,
    };

    let newObj = {
      head: 0,
      shoulders: 0,
      chest: 0,
      gloves: 0,
      legs: 0,
    };

    if (oldObj.head === "Yes" && newObj.head < 1) {
      newObj.head = 1;
      setGearCount(newObj);
    }
    if (oldObj.head === "No" && newObj.head > 0) {
      newObj.head = 0;
      setGearCount(newObj);
    }
    if (oldObj.shoulders === "Yes" && newObj.shoulders < 1) {
      newObj.shoulders = 1;
      setGearCount(newObj);
    }
    if (oldObj.shoulders === "No" && newObj.shoulders > 0) {
      newObj.shoulders = 0;
      setGearCount(newObj);
    }
    if (oldObj.chest === "Yes" && newObj.chest < 1) {
      newObj.chest = 1;
      setGearCount(newObj);
    }
    if (oldObj.chest === "No" && newObj.chest > 0) {
      newObj.chest = 0;
      setGearCount(newObj);
    }
    if (oldObj.gloves === "Yes" && newObj.gloves < 1) {
      newObj.gloves = 1;
      setGearCount(newObj);
    }
    if (oldObj.gloves === "No" && newObj.gloves > 0) {
      newObj.glvoes = 0;
      setGearCount(newObj);
    }
    if (oldObj.legs === "Yes" && newObj.legs < 1) {
      newObj.legs = 1;
      setGearCount(newObj);
    }
    if (oldObj.legs === "No" && newObj.legs > 0) {
      newObj.legs = 0;
      setGearCount(newObj);
    }
  };

  const handleClassSelect = (e) => {
    console.log(e.target.value);
    setSelectedClass(e.target.value);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    return e.target.value;
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
    console.log(gearCount);
  };

  return (
    <tr onSubmit={(e) => props.handleEditFormSubmit(e)}>
      <td>
        <input
          id={props.editCharacterData.id}
          name="characterName"
          type="text"
          placeholder="Enter character name"
          onChange={(e) => handleChange(e)}
          defaultValue={props.editCharacterData.name}
          required
        />
      </td>
      <td>
        <EditableRowClassSelect
          handleClassSelect={handleClassSelect}
          editCharacterData={props.editCharacterData}
          setSelectedClass={setSelectedClass}
        />
      </td>
      <td>
        <TokenDropdown id="characterToken" selectedClass={selectedClass} />
      </td>
      <EditableRowTierDropDown
        handleTokenCount={handleTokenCount}
        editCharacterData={props.editCharacterData}
        setGearCount={setGearCount}
        gearCount={gearCount}
      />
      <td>
        <EditableRowGearCount gearCount={gearCount} />
      </td>
      <td>
        <button>Save</button> <button>Cancel</button>
      </td>
    </tr>
  );
};

export default EditableRow;
