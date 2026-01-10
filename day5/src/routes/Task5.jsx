import React from "react";
import { useState } from "react";

function Task5() {
  const [notes, setNotes] = useState(["Note 1", "Note 2"]);
  const [edit, setEdit] = useState({
    editId: "",
    value: false,
  });
  const [text, setText] = useState("");
  return (
    <>
      <p>Task 5</p>
      {notes.map((note, index) => (
        <>
          {edit.value && edit.editId === index ? (
            <>
              <input
                placeholder="enter amount"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  if (text === "") {
                    return;
                  }
              
                  setEdit({
                    editId: index,
                    value: !edit.value,
                  });
                  const newA = [...notes];
                  newA[index] = text;
                  setNotes(newA);
                  setText("");
                }}
              >
                Done
              </button>
            </>
          ) : (
            <>
              {" "}
              <p>{note}</p>
              <button
                onClick={() => {
                  setEdit({
                    editId: index,
                    value: !edit.value,
                  });
                }}
              >
                Edit
              </button>
            </>
          )}
        </>
      ))}
    </>
  );
}

export default Task5;
