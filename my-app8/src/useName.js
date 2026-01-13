import { useState } from "react";

const useName = (initialValue = 0) => {
    const [count2, setCount] = useState(initialValue);

    const incrementA = () => setCount(count + 1);
    const decrementB = () => setCount(count - 1);

    return { count2, incrementA, decrementB };
};

export default useName;