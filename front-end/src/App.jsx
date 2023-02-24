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

  const tierTokens = {
    Zenith: ["Evoker", "Monk", "Rogue", "Warrior"],
    Dreadful: ["Death Knight", "Demon Hunter", "Warlock"],
    Mystic: ["Druid", "Hunter", "Mage"],
    Venerated: ["Paladin", "Priest", "Shaman"],
  };

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
    } = e.target;

    let count = 0;
    Object.keys(e.target).map((item) => {
      if (e.target[item].value === "Yes") {
        count = count + 1;
      }
    });
    let newToken = "";
    Object.keys(tierTokens).map((token, index) => {
      if (tierTokens[token].includes(characterClass.value)) {
        newToken = token;
      }
    });

    // let newArr = [
    //   ...characterArray,
    //   {
    //     name: characterName.value,
    //     class: characterClass.value,
    //     token: newToken,
    //     head: head.value,
    //     shoulders: shoulders.value,
    //     chest: chest.value,
    //     gloves: gloves.value,
    //     legs: legs.value,
    //     total: count,
    //   },
    // ];

    setCharacterArray((prevState) => [
      ...prevState,
      {
        name: characterName.value,
        class: characterClass.value,
        token: newToken,
        head: head.value,
        shoulders: shoulders.value,
        chest: chest.value,
        gloves: gloves.value,
        legs: legs.value,
        total: count,
      },
    ]);
  };

  return (
    <div className="App">
      <CharacterForm
        handleCharacterSubmits={handleCharacterSubmits}
        handleTokenCounts={handleTokenCounts}
      />
      <RosterList characterArray={characterArray} />
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
