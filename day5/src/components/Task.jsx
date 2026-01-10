import React from "react";
import { NavLink, useNavigate } from "react-router";

function Task() {
  return (
    <>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/task1">
        <button>Task 1 </button>
      </NavLink>
      <NavLink to="/task2">
        <button>Task 2</button>
      </NavLink>
      <NavLink to="/task3">
        <button>Task 3</button>
      </NavLink>
      <NavLink to="/task4">
        <button>Task 4</button>
      </NavLink>
      <NavLink to="/task5">
        <button>Task 5</button>
      </NavLink>
    </>
  );
}

export default Task;
