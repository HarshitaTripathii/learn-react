import React from "react";
import { useState } from "react";

function Task3() {
  const [items, setItem] = useState([
    { title: "Item A", liked: false },
    { title: "Item B", liked: false },
  ]);
  function toggle(index) {
    // create a new copy of items array
    const tempArray = [...items];
    //you have index of item whose button is clicked in "index",
    //move to index in ncopy array and update index's liked status
    tempArray[index].liked = !items[index].liked;
    // set the modified array in items array
    setItem(tempArray);
  }
  return (
    <>
      <p>Task 3 </p>
      {items.map((item, index) => (
        <>
          <p>{item.title}</p>
          <button
            onClick={() => {
              toggle(index);
            }}
          >
            {item.liked ? "Unike " : " Like"}
          </button>
        </>
      ))}
    </>
  );
}

export default Task3;
