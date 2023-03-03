const ReadOnlyRow = ({ char, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{char.name}</td>
      <td>{char.class}</td>
      <td>{char.token}</td>
      <td>{char.head}</td>
      <td>{char.shoulders}</td>
      <td>{char.chest}</td>
      <td>{char.gloves}</td>
      <td>{char.legs}</td>
      <td>{char.total}</td>
      <td>
        <button type="button" onClick={(e) => handleEditClick(e, char)}>
          Edit
        </button>
        <button onClick={() => handleDeleteClick(char)}>Delete</button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
