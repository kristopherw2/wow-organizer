import React, { useState, useEffect } from "react";

import "./App.css";
import CharacterForm from "./components/CharacterForm";
import RosterList from "./components/RosterList";
import TierCountPanels from "./components/TierCountPanels";

function App() {
  let [characterArray, setCharacterArray] = useState([]);
  let [zenithArray, setZenithArray] = useState([]);
  let [dreadfulArray, setDreadfulArray] = useState([]);
  let [mysticArray, setMysticArray] = useState([]);
  let [veneratedArray, setVeneratedArray] = useState([]);
  let [editCharacterData, setEditCharacterData] = useState({
    characterClass: "",
    characterName: "",
    head: "",
    shoulders: "",
    chest: "",
    gloves: "",
    legs: "",
    tokenDropDown: "",
    totalTierCount: "",
  });

  let [editCharacter, setEditCharacter] = useState(null);

  useEffect(() => {
    handleTokenCounts();
  }, [characterArray]);

  const handleTokenCounts = () => {
    characterArray.map((item) => {
      if (item.token === "Zenith" && !zenithArray.includes(item)) {
        setZenithArray((prevZenith) => [...prevZenith, item]);
      } else if (item.token === "Dreadful" && !dreadfulArray.includes(item)) {
        setDreadfulArray((prevState) => [...prevState, item]);
      } else if (item.token === "Mystic" && !mysticArray.includes(item)) {
        setMysticArray((prevState) => [...prevState, item]);
      } else if (item.token === "Venerated" && !veneratedArray.includes(item)) {
        setVeneratedArray((prevState) => [...prevState, item]);
      }
    });
  };

  const handleCharacterSubmits = (e) => {
    e.preventDefault();

    let {
      characterClass,
      characterName,
      head,
      shoulders,
      chest,
      gloves,
      legs,
      tokenDropDown,
      totalTierCount,
    } = e.target;

    setCharacterArray((prevState) => [
      ...prevState,
      {
        name: characterName.value,
        class: characterClass.value,
        token: tokenDropDown.value,
        head: head.value,
        shoulders: shoulders.value,
        chest: chest.value,
        gloves: gloves.value,
        legs: legs.value,
        total: totalTierCount.value,
      },
    ]);
  };

  const handleEditClick = (event, character) => {
    event.preventDefault();
    setEditCharacter(character);
    const formValues = {
      name: character.name,
      class: character.class,
      token: character.token,
      head: character.head,
      shoulders: character.shoulders,
      chest: character.chest,
      gloves: character.gloves,
      legs: character.legs,
    };
  };

  const handleEditFormChange = (e) => {
    e.preventDefault();
    console.log(e.target, "This fired");
    let {
      characterClass,
      characterName,
      head,
      shoulders,
      chest,
      gloves,
      legs,
      tokenDropDown,
      totalTierCount,
    } = e.target;

    setEditCharacter({
      name: characterName.value,
      class: characterClass.value,
      token: tokenDropDown.value,
      head: head.value,
      shoulders: shoulders.value,
      chest: chest.value,
      gloves: gloves.value,
      legs: legs.value,
      total: totalTierCount.value,
    });
  };

  return (
    <div className="App">
      <CharacterForm
        handleCharacterSubmits={handleCharacterSubmits}
        handleTokenCounts={handleTokenCounts}
      />
      <RosterList
        characterArray={characterArray}
        handleCharacterSubmits={handleCharacterSubmits}
        handleEditClick={handleEditClick}
        editCharacter={editCharacter}
        handleEditFormChange={handleEditFormChange}
      />
      <div>
        <TierCountPanels tokenName="Zenith" tokenSpecific={zenithArray} />
        <TierCountPanels tokenName="Dreadful" tokenSpecific={dreadfulArray} />
        <TierCountPanels tokenName="Mystic" tokenSpecific={mysticArray} />
        <TierCountPanels tokenName="Venerated" tokenSpecific={veneratedArray} />
      </div>
    </div>
  );
}

export default App;
