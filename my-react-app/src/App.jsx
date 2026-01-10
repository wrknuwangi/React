import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [color, setColor] = useState("Red");
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
      <h1>Lesson</h1>
      <p>Color is {color}</p>
      <button onClick={changeColor}>Change color</button>

      <p>Color is {name}</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default App;
