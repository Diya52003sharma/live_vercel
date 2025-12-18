import { useRef } from "react";
import React from "react";
function Useref()
{
    const box=useRef(null)
    const handle = () => 
    {
        const colors = ["red", "green", "blue", "orange", "purple"];
        const random = Math.floor(Math.random() * colors.length);
        box.current.style.backgroundColor = colors[random];
    }
    return(
        <>
        <div ref={box} className="h-full w-full flex justify-center text-4xl text-orange-950">
            <div >REf data:</div>
            <button onClick={handle}>click</button>
        </div>
        </>
    )
}
export default Useref;