import { useEffect, useState } from "react";
import { handleTokenCount } from "../handlers/HandleTokenCount";

function EditableRowTierDropDown({
  handleTokenCount,
  editCharacterData,
  setGearCount,
  gearCount,
}) {
  let { head, shoulders, chest, gloves, legs } = editCharacterData;
  let [editedGear, setEditedGear] = useState({
    head: head,
    shoulders: shoulders,
    chest: chest,
    gloves: gloves,
    legs: legs,
  });

  const options = ["Yes", "No"];

  const tierPieces = ["head", "shoulders", "chest", "gloves", "legs"];

  return tierPieces.map((gear) => {
    return (
      <td>
        <select id={gear} onChange={(e) => handleTokenCount(e)}>
          <option defaultValue={editCharacterData[gear]}>
            {editCharacterData[gear]}
          </option>
          {options
            .filter((item) => item !== editCharacterData[gear])
            .map((answer, index) => (
              <option key={index} value={answer}>
                {answer}
              </option>
            ))}
        </select>
      </td>
    );
  });
}

export default EditableRowTierDropDown;
