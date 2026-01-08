import React from "react";
import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");

  function addTask(e) {
    e.preventDefault();
    setTodo([...todo, { task: currentTodo, checked: false, parentId:"", id:"" }]);
    
    setCurrentTodo("");
  }
  function clearAll() {
    setTodo([]);
  }

  console.log(todo);
  return (
    <div className="flex items-center justify-center min-h-screen mt-10 ">
      <div className="flex flex-col gap-6 w-120  items-center">
        <form onSubmit={addTask} className="flex gap-3">
          <input
            type="text"
            placeholder="add task"
            value={currentTodo}
            onChange={(e) => {
              setCurrentTodo(e.target.value);
              console.log(currentTodo);
            }}
            className=" w-96 cursor-text rounded px-2 py-3 border border-gray-400 focus:outline-none  focus:border-gray-600"
          />
          <div className="flex justify-center items-center">
            <button className="border bg-green-800 text-amber-50 h-10 w-20 rounded hover:bg-green-600">
              Add
            </button>
            <button
              className="border bg-green-800 text-amber-50 h-10 w-20 rounded hover:bg-green-600"
              type="button"
              onClick={clearAll}
            >
              Clear All
            </button>
          </div>
        </form>

        <div className="flex flex-col gap-3 w-full">
          {todo.map((item, index) => (
            <div className="flex gap-6  justify-between rounded border border-gray-400 px-2 py-3">
              {edit ? (
                <input
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
              ) : (
                <p>{item.task}</p>
              )}

              {edit ? (
                <div className="flex gap-1 justify-center">
                  <button
                    onClick={() => {
                      //make a copy of todo
                      const newArray = [...todo];
                      // update  the task with new task(text) at current index
                      newArray[index].task = text;
                      //set the todo with new array
                      setTodo(newArray);
                      // set edit option false
                      setEdit(false);
                    }}
                  >
                    Tick
                  </button>
                  <button
                    onClick={() => {
                      setEdit(false);
                    }}
                  >
                    Cross
                  </button>
                </div>
              ) : (
                <div className="flex gap-1 justify-center">
                  <button
                    onClick={() => {
                      const newArray = [...todo];
                      newArray[index].checked = !item.checked;
                      setTodo(newArray);
                    }}
                    className={`border px-2 py-1
                                      ${
                                        item.checked
                                          ? "border-green-600 text-green-600"
                                          : "border-gray-400 text-gray-500"
                                      }`}
                  >
                    {item.checked ? "C" : "U"}
                  </button>

                  <button
                    onClick={() => {
                      const newA = todo.filter((ele, i) => i != index);
                      setTodo(newA);
                    }}
                    className="border border-red-600 px-2 py-1"
                  >
                    D
                  </button>

                  <button
                    className="border border-gray-400 px-2 py-1"
                    onClick={() => {
                      setEdit(true);
                      setText(item.task);
                    }}
                  >
                    E
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
