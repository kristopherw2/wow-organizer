import { useEffect, useState } from "react";

function TierCountPanels(props) {
  let totalCharacters = props.tokenSpecific.length;
  let [headCount, setHeadCount] = useState(0);
  let [shouldersCount, setShouldersCount] = useState(0);
  let [chestCount, setChestCount] = useState(0);
  let [glovesCount, setGlovesCount] = useState(0);
  let [legsCount, setLegsCount] = useState(0);
  let [roster, setRoster] = useState([]);

  const countHandler = () => {
    if (props.tokenSpecific.length === 0) {
      setHeadCount(0);
      setShouldersCount(0);
      setChestCount(0);
      setGlovesCount(0);
      setLegsCount(0);
    }
    let headsCounted = 0;
    let shouldersCounted = 0;
    let chestsCounted = 0;
    let glovesCounted = 0;
    let legsCounted = 0;
    props.tokenSpecific.map((item) => {
      if (item.head === "Yes") {
        headsCounted += 1;
        setHeadCount(headsCounted);
      }
      if (item.shoulders === "Yes") {
        shouldersCounted += 1;
        setShouldersCount(shouldersCounted);
      }
      if (item.chest === "Yes") {
        chestsCounted += 1;
        setChestCount(chestsCounted);
      }
      if (item.gloves === "Yes") {
        glovesCounted += 1;
        setGlovesCount(glovesCounted);
      }
      if (item.legs === "Yes") {
        legsCounted += 1;
        setLegsCount(legsCounted);
      }
    });
  };

  const rosterHandler = () => {
    setRoster(...props.tokenSpecific);
  };

  useEffect(() => {
    countHandler();
  }, [props.tokenSpecific]);

  return (
    <div>
      <h2>{props.tokenName}</h2>
      <h4>Total Characters: {totalCharacters}</h4>
      <ul>
        <li>Head: {headCount}</li>
        <li>Shoulders: {shouldersCount}</li>
        <li>Chest: {chestCount}</li>
        <li>Gloves: {glovesCount}</li>
        <li>Legs: {legsCount}</li>
      </ul>

      <ul>
        <li>Missing Head: {totalCharacters - headCount}</li>
        <li>Missing Shoulders: {totalCharacters - shouldersCount}</li>
        <li>Missing Chest: {totalCharacters - chestCount}</li>
        <li>Missing Gloves: {totalCharacters - glovesCount}</li>
        <li>Missing Legs: {totalCharacters - legsCount}</li>
      </ul>
    </div>
  );
}

export default TierCountPanels;
