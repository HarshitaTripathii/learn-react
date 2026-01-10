import React from "react";

function Task2() {
  const tasks = [
    { name: "Gym", done: false },
    { name: "study", done: true },
  ];
  return (
    <>
      <p>Task 2</p>
      {tasks.map((obj) => (
        <p>{`${obj.name} : ${obj.done ? "Completed" : "Pending"} `}</p>
      ))}
    </>
  );
}

export default Task2;
