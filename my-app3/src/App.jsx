import { useState, useCallback } from "react";
import Header from "./components/header";

function App() {
  const [count, setCount] = useState(0);

  const newFn = useCallback(() => {
    console.log("callback function");
  }, []);

  return (
    <>
      <Header name="slt" newFn={newFn} />
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>
        Click Here
      </button>
    </>
  );
}

export default App;