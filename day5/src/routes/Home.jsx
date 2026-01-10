import React from "react";

function Home() {
  return (
    <>
      <p>Question 1</p>
      <p> You have an array: Use map() to render: Fruits with index+1</p>
      <p>Question 2</p>
      <p>
        Conditional text inside map : Use map() to render: If done === true →
        show "Completed" Else → show "Pending"
      </p>
      <p>Question 3</p>
      <p>
        Button inside map modifies only clicked item : Inside map(): Show title
        Add a Like button Clicking button toggles liked only for that item.
      </p>
      <p>Question 4</p>
      <p>
        Delete element using map index : Render each number with a Delete button
        , Clicking delete removes only that number
      </p>
      <p>Question 5</p>
      <p>
        Use map() to: Show text Add Edit button When clicked, replace text with
        input Save changes
      </p>
    </>
  );
}

export default Home;
