import React, { Fragment, useState } from "react";

import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";

function RosterList(props) {
  return (
    <div>
      <form onSubmit={(e) => props.handleEditFormSubmit(e)}>
        <table>
          <thead>
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.characterArray.map((char) => {
              return (
                <Fragment>
                  {props.editCharacter === char && props.editState === true ? (
                    <EditableRow
                      handleEditFormChange={props.handleEditFormChange}
                      editCharacterData={props.editCharacterData}
                      setEditCharacterData={props.setEditCharacterData}
                      setEditCharacter={props.setEditCharacter}
                      setEditState={props.setEditState}
                      editState={props.editState}
                    />
                  ) : (
                    <ReadOnlyRow
                      char={char}
                      handleEditClick={props.handleEditClick}
                      handleDeleteClick={props.handleDeleteClick}
                    />
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default RosterList;
