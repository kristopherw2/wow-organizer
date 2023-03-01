import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

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
    id: "",
    name: "",
    class: "",
    token: "",
    head: "",
    shoulders: "",
    chest: "",
    gloves: "",
    legs: "",
    total: "",
  });

  let [editCharacter, setEditCharacter] = useState(null);

  useEffect(() => {
    handleTokenCounts();
  }, [characterArray]);

  const handleTokenCounts = () => {
    characterArray.map((item) => {
      if (item.token === "Zenith" && !zenithArray.includes(item)) {
        setZenithArray((prevZenith) => [...prevZenith, item]);
      } else if (
        item.token === "Dreadful" &&
        !dreadfulArray.includes(item.id)
      ) {
        setDreadfulArray((prevState) => [...prevState, item]);
      } else if (item.token === "Mystic" && !mysticArray.includes(item)) {
        setMysticArray((prevState) => [...prevState, item]);
      } else if (item.token === "Venerated" && !veneratedArray.includes(item)) {
        setVeneratedArray((prevState) => [...prevState, item]);
      }
    });
  };

  const handleTokenSubtractions = () => {
    let checkChar = editCharacterData;
    let copiedArr = [];
    let filteredArr;
    if (checkChar.token === "Zenith") {
      copiedArr = [...zenithArray];
      filteredArr = copiedArr.filter((item) => item.id !== checkChar.id);
      setZenithArray(filteredArr);
    } else if (checkChar.token === "Dreadful") {
      copiedArr = [...dreadfulArray];
      filteredArr = copiedArr.filter((item) => item.id !== checkChar.id);
      setDreadfulArray(newFilteredArr);
    } else if (checkChar.token === "Mystic") {
      copiedArr = [...mysticArray];
      filteredArr = copiedArr.filter((item) => item.id !== checkChar.id);
      setMysticArray(filteredArr);
    } else if (checkChar.token === "Venerated") {
      copiedArr = [...veneratedArray];
      filteredArr = copiedArr.filter((item) => item.id !== checkChar.id);
      setVeneratedArray(filteredArr);
    }
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
        id: nanoid(),
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
      id: character.id,
      name: character.name,
      class: character.class,
      token: character.token,
      head: character.head,
      shoulders: character.shoulders,
      chest: character.chest,
      gloves: character.gloves,
      legs: character.legs,
    };
    setEditCharacterData(formValues);
  };

  const handleEditFormChange = (e) => {
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

    //const newFormData = { ...editCharacterData };
    setEditCharacterData({
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

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    handleTokenSubtractions();
    const editedCharacter = {
      id: event.target.characterName.id,
      name: event.target.characterName.value,
      class: event.target.characterClass.value,
      token: event.target.tokenDropDown.value,
      head: event.target.head.value,
      shoulders: event.target.shoulders.value,
      chest: event.target.chest.value,
      gloves: event.target.gloves.value,
      legs: event.target.legs.value,
      total: event.target.totalTierCount.value,
    };

    const copiedCharArray = [...characterArray];

    let index = copiedCharArray.findIndex(
      (item) => item.id === editCharacter.id
    );

    copiedCharArray[index] = editedCharacter;
    setCharacterArray(copiedCharArray);
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
        handleEditFormSubmit={handleEditFormSubmit}
        editCharacterData={editCharacterData}
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
