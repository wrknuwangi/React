// import { useState } from "react";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  const [color, setColor] = useState("lightgreen");
  const [name, setName] = useState("Nuwangi");

  // Runs on every render
  useEffect(() => {
    console.log("component Rendered");
  });

  // Runs only once
  useEffect(() => {
    console.log("component New");
  }, []);

  // Runs only when 'color' changes
  useEffect(() => {
    console.log("color changed to", color);
  }, [color]);

  const changeColor = () => {
    setColor("Green");
  };

  useEffect(() => {
    console.log("name changed to", name);
  }, [name]);

  const changeName = () => {
    setName("Kisholy");
  };

  return (
    <div>
      <Header title="My first React App" />
<h1 style={{
          backgroundColor: color, // Dynamic background
          padding: "10px",
          color: "white",
          borderRadius: "5px",
        }}>useState</h1>
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    <h1 style={{
          backgroundColor: color, // Dynamic background
          padding: "10px",
          color: "white",
          borderRadius: "5px",
        }}>useEffect</h1>
    <p>Color is {color}</p>
    <button onClick={changeColor}>Change color</button>

    <p class="text-sky-500">Name is {name}</p>
    <button onClick={changeName}>Change Name</button>
    </div>
  );
};

export default App;



