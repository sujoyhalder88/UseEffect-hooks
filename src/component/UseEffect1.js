import React, { useEffect, useState } from "react";

const UseEffect1 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count >= 1) {
            document.title = `Chat(${count})`;
        } else {
            document.title = `Chat`;
        }
    }, []);

    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    );
};

export default UseEffect1;
