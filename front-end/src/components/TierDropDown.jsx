function TierDropDown() {
  const options = ["Yes", "No"];

  const tierPieces = ["head", "shoulders", "chest", "gloves", "legs"];

  let handleOptionsChange = (e) => {
    return e.target.value;
  };

  return tierPieces.map((item) => {
    let firstLetter = item.charAt(0).toUpperCase();
    let restOfWord = item.slice(1);
    let completedWord = firstLetter + restOfWord;
    return (
      <>
        <label htmlFor={item}>{completedWord}: </label>
        <select id={item} onChange={handleOptionsChange}>
          {options.map((answer, index) => (
            <option key={index} value={answer}>
              {answer}
            </option>
          ))}
        </select>
      </>
    );
  });
}

export default TierDropDown;
