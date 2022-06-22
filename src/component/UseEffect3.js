import React, { useEffect, useState } from "react";

// CleanUp Function
const UseEffect3 = () => {
    const [width, setWidth] = useState(window.screen.width);

    const actualWidth = () => {
        console.log(window.innerWidth);
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", actualWidth);
        return () => {
            window.removeEventListener("resize", actualWidth);
        };
    });

    return (
        <div className="container">
            <p>This is actual size in your pc windows</p>
            <h1>{width}</h1>
        </div>
    );
};

export default UseEffect3;
