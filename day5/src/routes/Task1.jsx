import React from "react";

function Task1() {
  const fruits = ["Apple", "Banana", "Mango"];
  return (
    <>
      <p>Task 1 </p>
      {fruits.map((item, index) => (
        <p>{`${index + 1} : ${item}`}</p>
      ))}
    </>
  );
}

export default Task1;
