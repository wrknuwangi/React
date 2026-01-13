import { useState, useReducer } from 'react';
import './App.css';

function App() {
  const initialState = {count: 0};
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase": {
        return { count: state.count + 1 };
      }
      case "decrease": {
        return { count: state.count - 1 };
      }
      case "input": {
        return { count: action.payload };
      }
      default: {
        return state;
      }
    }
  }

  const [state, dispatchEvent] = useReducer(reducer, initialState)

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatchEvent({ type: "increase"})} style={{ backgroundColor: "red" }}>Incerease</button>
      
      <input onChange={(e) => dispatchEvent({ type: "input", payload: Number(e.target.value)})} type="number">
        
        </input>
        <button onClick={() => dispatchEvent({ type: "decrease"})} style={{ backgroundColor: "red" }}>Decrease</button>
    </>
  )
}

export default App
