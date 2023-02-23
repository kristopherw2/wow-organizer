function RosterList(props) {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Token</th>
            <th>Head</th>
            <th>Shoulders</th>
            <th>Chest</th>
            <th>Gloves</th>
            <th>Legs</th>
            <th>Total</th>
          </tr>
          {props.characterArray.map((char, index) => {
            return (
              <tr key={index}>
                <td>{char.name}</td>
                <td>{char.class}</td>
                <td>{char.token}</td>
                <td>{char.head}</td>
                <td>{char.shoulders}</td>
                <td>{char.chest}</td>
                <td>{char.gloves}</td>
                <td>{char.legs}</td>
                <td>{char.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default RosterList;

// return Object.keys(char).map((item, index) => {
//   return (
//     <tr key={index}>
//       <td>{}</td>
//       <td>{item.class}</td>
//     </tr>
//   );
// });
