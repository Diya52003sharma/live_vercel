import { useState } from "react";
import React from "react";
function Ustate()
{
    const [state,setState]=useState(0)
    const handle=()=>
    {
        setState(state + 1);
        console.log(state+1);
        
    }
    return(
        <>
        <div className="align-middle text-4xl bg-black text-gray-700">
        <div>State are{state}</div>
        <button onClick={handle}>click me!</button>
        </div>
        </>
    )
}
export default Ustate;