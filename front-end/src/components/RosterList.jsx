function RosterList(props) {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Class</th>
          </tr>
          {props.characterArray.map((char) => {
            return Object.keys(char).map((item) => {
              return (
                <tr>
                  <td>{item}</td>
                  <td>{char[item]}</td>
                </tr>
              );
            });
          })}
        </tbody>
      </table>
    </>
  );
}

export default RosterList;
