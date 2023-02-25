import React from "react";

const TokenDropdown = ({ selectedClass }) => {
  const tierTokens = {
    Zenith: ["Evoker", "Monk", "Rogue", "Warrior"],
    Dreadful: ["Death Knight", "Demon Hunter", "Warlock"],
    Mystic: ["Druid", "Hunter", "Mage"],
    Venerated: ["Paladin", "Priest", "Shaman"],
  };

  let newToken = "";
  Object.keys(tierTokens).map((token, index) => {
    if (tierTokens[token].includes(selectedClass)) {
      newToken = token;
    }
  });

  return (
    <>
      <select id="tokenDropDown" required>
        <option value={newToken}>{newToken}</option>
      </select>
    </>
  );
};

export default TokenDropdown;
