import React, { useEffect } from "react";

function Mount()
{
    useEffect(()=>
    {
        console.log("rerender eleemt");
        
    },[])
    return(
<>
<div>
    <p>hello</p>
    
</div>
</>
    )
}
export default Mount;