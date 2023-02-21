import React, { useState, useEffect } from "react";

import "./App.css";
import CharacterForm from "./components/CharacterForm";
import RosterList from "./components/RosterList";

function App() {
  let [characterArray, setCharacterObject] = useState([]);

  const handleCharacterSubmits = (e) => {
    e.preventDefault();
    let { characterClass, characterName } = e.target;
    let newArr = [
      ...characterArray,
      { [characterName.value]: characterClass.value },
    ];
    setCharacterObject(newArr);
  };

  return (
    <div className="App">
      <CharacterForm handleCharacterSubmits={handleCharacterSubmits} />
      <RosterList characterArray={characterArray} />
    </div>
  );
}

export default App;
