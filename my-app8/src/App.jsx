
import './App.css';
import useCounter from './useCounter';
import useName from './useName';

function App() {
  const { count, increment, decrement } = useCounter(5);
  const { count2, incrementA, decrementB } = useName(5);
  const total = () => count + count2;
  const multi = () => count * count2;

  return (
    <>
      <h1>Custom Hook 1</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <hr />

      <h1>Custom Hook 2</h1>
      <p>Count: {count2}</p>
      <button onClick={incrementA}>Increment</button>
      <button onClick={decrementB}>Decrement</button>

      <hr />

      <h1>Custom Hook Calculator</h1>
      <h4>TOTAL: {total()}</h4>
      <h4>MULTIFLICATION: {multi()}</h4>
    </>
  );
}

export default App
