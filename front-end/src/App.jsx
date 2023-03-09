import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import CharacterForm from "./components/CharacterForm";
import RosterList from "./components/RosterList";
import TierCountPanels from "./components/TierCountPanels";
import { handleTokenCount } from "./handlers/HandleTokenCount";

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

  let [editState, setEditState] = useState(null);

  let [editCharacter, setEditCharacter] = useState(null);

  useEffect(() => {
    handleTokenCounts();
    handleTokenSubtractions();
  }, [characterArray]);

  useEffect(() => {
    if (characterArray.length === 0) {
      getCharacters();
    }
  }, [characterArray]);

  async function getCharacters() {
    const base_url = process.env.VITE_BASE_URL;
    const url = `http://18.222.147.73/api`;
    axios.get(url).then((response) => {
      let newArr = [];
      response.data.result.map((character) => {
        let {
          id,
          character_name,
          character_class,
          head,
          shoulders,
          chest,
          gloves,
          legs,
          token,
          total_tier,
        } = character;

        let newChar = {
          id: id,
          name: character_name,
          class: character_class,
          token: token,
          head: head,
          shoulders: shoulders,
          chest: chest,
          gloves: gloves,
          legs: legs,
          total: total_tier,
        };

        newArr.push(newChar);
      });
      setCharacterArray(newArr);
    });
  }

  const handleTokenCounts = () => {
    characterArray.map((item) => {
      let filteredZenith = zenithArray.filter((char) => char.id === item.id);
      let filteredDreadful = dreadfulArray.filter(
        (char) => char.id === item.id
      );
      let filteredMystic = mysticArray.filter((char) => char.id === item.id);
      let filteredVenerated = veneratedArray.filter(
        (char) => char.id === item.id
      );
      if (item.token === "Zenith" && filteredZenith.length === 0) {
        setZenithArray((prevZenith) => [...prevZenith, item]);
      } else if (item.token === "Dreadful" && filteredDreadful.length === 0) {
        setDreadfulArray((prevState) => [...prevState, item]);
      } else if (item.token === "Mystic" && filteredMystic.length === 0) {
        setMysticArray((prevState) => [...prevState, item]);
      } else if (item.token === "Venerated" && filteredVenerated.length === 0) {
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
      filteredArr = copiedArr.filter((item) => {
        console.log(typeof checkChar.id, typeof item.id);
        item.id !== checkChar.id;
      });
      setZenithArray(filteredArr);
    } else if (checkChar.token === "Dreadful") {
      copiedArr = [...dreadfulArray];
      filteredArr = copiedArr.filter(
        (item) => item.id !== parseInt(checkChar.id)
      );
      setDreadfulArray(filteredArr);
    } else if (checkChar.token === "Mystic") {
      copiedArr = [...mysticArray];
      filteredArr = copiedArr.filter(
        (item) => item.id !== parseInt(checkChar.id)
      );
      setMysticArray(filteredArr);
    } else if (checkChar.token === "Venerated") {
      copiedArr = [...veneratedArray];
      filteredArr = copiedArr.filter(
        (item) => item.id !== parseInt(checkChar.id)
      );
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
    const characterObj = {
      name: characterName.value,
      class: characterClass.value,
      token: tokenDropDown.value,
      head: head.value,
      shoulders: shoulders.value,
      chest: chest.value,
      gloves: gloves.value,
      legs: legs.value,
      total: totalTierCount.value,
    };

    //naming is bad on backend need to adjust front end this just patches the issue for now
    const postCharacterObj = {
      character_name: characterName.value,
      character_class: characterClass.value,
      head: head.value,
      shoulders: shoulders.value,
      chest: chest.value,
      gloves: gloves.value,
      legs: legs.value,
      token: tokenDropDown.value,
      total_tier: parseInt(totalTierCount.value),
    };

    addChar(postCharacterObj);

    //setCharacterArray((prevState) => [...prevState, characterObj]);
  };

  const addChar = async (charObj) => {
    //const base_url = process.env.VITE_BASE_URL;
    const url = `http://18.222.147.73/api/`;
    axios.post(url, charObj).then((response) =>
      setCharacterArray((prevState) => [
        ...prevState,
        {
          id: response.data.result.id,
          name: response.data.result.character_name,
          class: response.data.result.character_class,
          token: response.data.result.token,
          head: response.data.result.head,
          shoulders: response.data.result.shoulders,
          chest: response.data.result.chest,
          gloves: response.data.result.gloves,
          legs: response.data.result.legs,
          total: response.data.result.total_tier,
        },
      ])
    );
  };

  const handleEditClick = (event, character) => {
    event.preventDefault();
    setEditCharacter(character);
    setEditState(!editState);
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

    const putEditedCharacter = {
      character_name: event.target.characterName.value,
      character_class: event.target.characterClass.value,
      head: event.target.head.value,
      shoulders: event.target.shoulders.value,
      chest: event.target.chest.value,
      gloves: event.target.gloves.value,
      legs: event.target.legs.value,
      token: event.target.tokenDropDown.value,
      total_tier: event.target.totalTierCount.value,
    };

    const base_url = process.env.VITE_BASE_URL;

    axios.put(
      `http://18.222.147.73/api/${event.target.characterName.id}`,
      putEditedCharacter
    );

    const copiedCharArray = [...characterArray];
    let index = copiedCharArray.findIndex(
      (item) => item.id === editCharacter.id
    );

    copiedCharArray[index] = editedCharacter;
    setCharacterArray(copiedCharArray);
    window.location.reload(true);
    //handleTokenCount();
  };

  const handleDeleteClick = (character) => {
    const base_url = process.env.VITE_BASE_URL;
    axios.delete(`http://18.222.147.73/api/${character.id}`);
    const newCharArray = [...characterArray];
    const index = newCharArray.findIndex((char) => char.id === character.id);
    newCharArray.splice(index, 1);

    setCharacterArray(newCharArray);
    let checkChar = character;
    let copiedArr = [];
    let filteredArr;
    if (checkChar.token === "Zenith") {
      copiedArr = [...zenithArray];
      filteredArr = copiedArr.filter((item) => item.id !== checkChar.id);
      setZenithArray(filteredArr);
    } else if (checkChar.token === "Dreadful") {
      copiedArr = [...dreadfulArray];
      filteredArr = copiedArr.filter((item) => item.id !== checkChar.id);
      setDreadfulArray(filteredArr);
    } else if (checkChar.token === "Mystic") {
      copiedArr = [...mysticArray];
      filteredArr = copiedArr.filter((item) => item.id !== checkChar.id);
      setMysticArray(filteredArr);
    } else if (checkChar.token === "Venerated") {
      copiedArr = [...veneratedArray];
      filteredArr = copiedArr.filter((item) => item.id !== checkChar.id);
      setVeneratedArray(filteredArr);
    }
    handleTokenCounts();
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
        setEditCharacterData={setEditCharacterData}
        setEditState={setEditState}
        editState={editState}
        handleDeleteClick={handleDeleteClick}
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
