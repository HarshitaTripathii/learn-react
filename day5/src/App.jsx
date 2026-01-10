import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Task from "./components/Task";
import { Routes, Route } from "react-router";
import Task1 from "./routes/Task1";
import Task2 from "./routes/Task2";
import Task3 from "./routes/Task3";
import Task4 from "./routes/Task4";
import Task5 from "./routes/Task5";
import Home from "./routes/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Task />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/task1" element={<Task1 />}></Route>
        <Route path="/task2" element={<Task2 />}></Route>
        <Route path="/task3" element={<Task3 />}></Route>
        <Route path="/task4" element={<Task4 />}></Route>
        <Route path="/task5" element={<Task5 />}></Route>
      </Routes>
    </>
  );
}

export default App;
