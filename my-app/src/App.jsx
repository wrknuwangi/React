//import logo from "./logo.svg";

import "./App.css";
import React, { useEffect, useRef, useState } from 'react';

function UseRefPage() {
    // const [count, setCount] = useState(0);
    const count = useRef(0);
    console.log(count.current);
    const inputRef = useRef(null);
    // const marks = useRef(0);
    // console.log("A - " + marks.current);
    const [value, setValue] = useState(0);
    


    useEffect(() => {
        count.current = count.current + 1;
    });

    const btnClicked = () => {
        console.log(inputRef.current);
        if (inputRef.current) {
            inputRef.current.style.background = "blue";
            inputRef.current.style.color = "white";
            inputRef.current.style.padding = "10px";
        }
    };

    return (
        <>
            <div>
                <h1 style={{ backgroundColor: "gray", color: "white", padding: "5px" }}>useRef</h1>
                <h1>Value Counter</h1>
            </div>

            <button onClick={() => setValue(prev => prev - 1)}>Decrement</button>
            <h1 ref={inputRef}>{value}</h1>
            <button onClick={() => setValue(prev => prev + 1)}>Increment</button>

            <h2>Render Count: {count.current}</h2>
            <button onClick={btnClicked}>Click Here</button>
        </>
    );
}

export default UseRefPage;