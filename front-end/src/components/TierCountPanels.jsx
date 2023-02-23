function TierCountPanels(props) {
  return (
    <div>
      <h2>{props.tokenName}</h2>
      <h4>Total Characters: {props.tokenSpecific.length}</h4>
      <ul>
        <li>Head: </li>
        <li>Shoulders: </li>
        <li>Chest:</li>
        <li>Gloves: </li>
        <li>Legs: </li>
      </ul>

      <ul>
        <li>Missing Head: </li>
        <li>Missing Shoulders: </li>
        <li>Missing Chest:</li>
        <li>Missing Gloves: </li>
        <li>Missing Legs: </li>
      </ul>
    </div>
  );
}

export default TierCountPanels;
