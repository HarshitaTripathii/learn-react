import React from "react";
import { useState } from "react";

function Task4() {
  const [numbers, setNumbers] = useState([10, 20, 30, 40]);
  function del(index) {
    const newArray = numbers.filter((num, ind) => {
      return ind != index;
    });
    setNumbers(newArray);
  }
  return (
    <>
      <p>Task 4</p>
      {numbers.map((num, index) => (
        <>
          <p>{num}</p>
          <button
            onClick={() => {
              del(index);
            }}
          >
            Delete
          </button>
        </>
      ))}
    </>
  );
}

export default Task4;
