import { handleTokenCount } from "../handlers/HandleTokenCount";

function EditableRowTierDropDown({ handleTokenCount }) {
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
      <td>
        <select id={item} onChange={(e) => handleTokenCount(e)}>
          {options.map((answer, index) => (
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
